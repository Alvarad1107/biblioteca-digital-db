use("Biblioteca_Digital");

// Pipeline 1: Top 5 de los libros más prestados en la historia

db.prestamos.aggregate([
  // 1. Agrupar por código de libro y contar cuántas veces se ha prestado
  { $group: { _id: "$codigo_libro", total_prestamos: { $sum: 1 } } },
  // 2. Ordenar de mayor a menor (descendente)
  { $sort: { total_prestamos: -1 } },
  // 3. Limitar a los 5 primeros (Top 5)
  { $limit: 5 },
  // 4. Cruzar con la colección Libros para traer el título y datos
  { $lookup: { from: "Libros", localField: "_id", foreignField: "codigo_libro", as: "detalles_libro" } },
  // 5. Filtrar para asegurar que el cruce trajo resultados válidos
  { $match: { "detalles_libro": { $ne: [] } } }
]);

// Pipeline 2: Top 5 de usuarios con mayor cantidad de préstamos retrasados
db.prestamos.aggregate([
  // 1. Filtrar únicamente los préstamos que están retrasados
  { $match: { estado_prestamo: "Retrasado" } },
  // 2. Agrupar por usuario y sumar sus retrasos
  { $group: { _id: "$codigo_usuario", total_retrasos: { $sum: 1 } } },
  // 3. Cruzar con la colección usuario para traer su nombre y correo
  { $lookup: { from: "usuario", localField: "_id", foreignField: "codigo_usuario", as: "datos_usuario" } },
  // 4. Ordenar a los más morosos primero
  { $sort: { total_retrasos: -1 } },
  // 5. Limitar a los 5 peores casos
  { $limit: 5 }
]);

// Pipeline 3: Top 5 de Autores con mayor volumen de libros en el inventario
db.Libros.aggregate([
  // Desempaquetar el arreglo de autores
  { $unwind: "$autores" },
  // 1. Filtrar solo los libros que están activos
  { $match: { estado: "Activo" } },
  // 2. Agrupar por código de autor, contar títulos y sumar todas sus existencias físicas
  { $group: { _id: "$autores.codigo_autor", total_titulos: { $sum: 1 }, volumen_existencias: { $sum: "$existencias_totales" } } },
  // 3. Cruzar con Autores para obtener el nombre real del autor
  { $lookup: { from: "Autores", localField: "_id", foreignField: "codigo_autor", as: "info_autor" } },
  // 4. Ordenar por el mayor volumen de existencias
  { $sort: { volumen_existencias: -1 } },
  // 5. Limitar a los 5 principales
  { $limit: 5 }
]);

// Pipeline 4: Las 5 categorías temáticas más populares según los préstamos
db.prestamos.aggregate([
  // 1. Tomar solo los préstamos válidos (Activos o Devueltos, ignorando cancelados si los hubiera)
  { $match: { estado_prestamo: { $in: ["Activo", "Devuelto"] } } },
  // 2. Cruzar con Libros para conocer a qué categoría pertenece el libro prestado
  { $lookup: { from: "Libros", localField: "codigo_libro", foreignField: "codigo_libro", as: "libro_info" } },
  // Desempaquetar el arreglo cruzado y el arreglo de categorías
  { $unwind: "$libro_info" },
  { $unwind: "$libro_info.categorias" },
  // 3. Agrupar por el nombre de la categoría y contar
  { $group: { _id: "$libro_info.categorias", popularidad: { $sum: 1 } } },
  // 4. Ordenar las categorías más solicitadas primero
  { $sort: { popularidad: -1 } },
  // 5. Mostrar solo el Top 5
  { $limit: 5 }
]);

// Pipeline 5: Top 5 de libros clásicos (anteriores al 2000) más prestados
db.prestamos.aggregate([
  // 1. Cruzar los préstamos con el catálogo de libros
  { $lookup: { from: "Libros", localField: "codigo_libro", foreignField: "codigo_libro", as: "libro_clasico" } },
  { $unwind: "$libro_clasico" },
  // 2. Filtrar dejando estrictamente los libros publicados antes del año 2000
  { $match: { "libro_clasico.anio_publicacion": { $lt: 2000 } } },
  // 3. Agrupar por el título del libro y conservar el año de publicación
  { $group: { _id: "$libro_clasico.titulo", anio: { $first: "$libro_clasico.anio_publicacion" }, veces_prestado: { $sum: 1 } } },
  // 4. Ordenar desde el libro más antiguo al más reciente
  { $sort: { anio: 1 } },
  // 5. Limitar a los primeros 5 resultados
  { $limit: 5 }
]);