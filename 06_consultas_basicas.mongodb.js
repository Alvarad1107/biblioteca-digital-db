use("Biblioteca_Digital");

//1. Filtros simples

// Consulta 1: Buscar todos los libros en estado 'Activo'
db.Libros.find({ estado: "Activo" });

// Consulta 2: Buscar los usuarios con nivel de acceso 'Bibliotecario'
db.usuario.find({ nivel_acceso: "Bibliotecario" });

// Consulta 3: Buscar préstamos con estado 'Retrasado'
db.prestamos.find({ estado_prestamo: "Retrasado" });


// 2. Comparación

// Consulta 4: Libros con existencias disponibles mayor o igual a 15 ($gte)
db.Libros.find({ existencias_disponibles: { $gte: 15 } });

// Consulta 5: Libros publicados antes del año 1950 ($lt)
db.Libros.find({ anio_publicacion: { $lt: 1950 } });

// Consulta 6: Préstamos con código de préstamo diferente a 'PR-5001' ($ne)
db.prestamos.find({ codigo_prestamo: { $ne: "PR-5001" } });


// 3. Operadores lógicos

// Consulta 7: Usuarios que son 'Administrador' O 'Supervisor' ($or)
db.usuario.find({
  $or: [
    { nivel_acceso: "Administrador" },
    { nivel_acceso: "Supervisor" }
  ]
});

// Consulta 8: Préstamos activos del usuario 'USR-BIB-002' ($and)
db.prestamos.find({
  $and: [
    { codigo_usuario: "USR-BIB-002" },
    { estado_prestamo: "Activo" }
  ]
});

// Consulta 9: Autores que NO sean de nacionalidad 'Mexicana' ni 'Mexicano' ($nor)
db.Autores.find({
  $nor: [
    { nacionalidad: "Mexicana" },
    { nacionalidad: "Mexicano" }
  ]
});


// 4. Proyección de campos

// Consulta 10: Mostrar solo título y año de publicación de los libros (ocultar _id)
db.Libros.find(
  { estado: "Activo" },
  { _id: 0, titulo: 1, anio_publicacion: 1 }
);

// Consulta 11: Mostrar nombre completo y correo de los usuarios
db.usuario.find(
  {},
  { nombre_completo: 1, correo: 1 }
);

// Consulta 12: Mostrar código de préstamo y estado de la colección préstamos
db.prestamos.find(
  {},
  { codigo_prestamo: 1, estado_prestamo: 1 }
);


// 5. Consultas con sort() 

// Consulta 13: Libros ordenados por año de publicación de forma ascendente (1)
db.Libros.find().sort({ anio_publicacion: 1 });

// Consulta 14: Usuarios ordenados por nombre completo de forma descendente (-1)
db.usuario.find().sort({ nombre_completo: -1 });


// 6. Consultas con limit()

// Consulta 15: Obtener únicamente los primeros 3 libros registrados
db.Libros.find().limit(3);

// Consulta 16: Obtener los 5 préstamos más antiguos de la colección
db.prestamos.find().sort({ "fechas.fecha_salida": 1 }).limit(5);


// 7. Consultas con operadores de fecha

// Consulta 17: Préstamos cuya fecha límite de devolución sea posterior al 30 de mayo de 2026
db.prestamos.find({
  "fechas.fecha_limite_devolucion": { $gt: new Date("2026-05-30T00:00:00Z") }
});

// Consulta 18: Préstamos que ya registran una fecha real de devolución efectuada
db.prestamos.find({
  "fechas.fecha_devolucion_real": { $exists: true }
});


// 8. Consultas con operadores de arreglo

// Consulta 19: Libros que incluyen la categoría 'Realismo mágico' dentro de su arreglo
db.Libros.find({ categorias: "Realismo mágico" });

// Consulta 20: Libros que pertenecen simultáneamente a las categorías 'Novela' y 'Psicológica' ($all)
db.Libros.find({ categorias: { $all: ["Novela", "Psicológica"] } });