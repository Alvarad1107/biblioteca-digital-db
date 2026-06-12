// 1. Usar la base de datos
use("Biblioteca_Digital");

// Garantizar que no existan dos usuarios con el mismo código o el mismo correo
db.usuario.createIndex({ codigo_usuario: 1 }, { unique: true });
db.usuario.createIndex({ correo: 1 }, { unique: true });


// Código de autor unico
db.Autores.createIndex({ codigo_autor: 1 }, { unique: true });

// Indice de texto para buscar autores por su apellido rapidamente
db.Autores.createIndex({ apellido: 1 });


// Código de libro único
db.Libros.createIndex({ codigo_libro: 1 }, { unique: true });

// Indice de texto (Text Index) para implementar un buscador por título
db.Libros.createIndex({ titulo: "text" });

// Indice para filtrar rápidamente los libros por categoría
db.Libros.createIndex({ categorias: 1 });


// Código de préstamo único
db.prestamos.createIndex({ codigo_prestamo: 1 }, { unique: true });

// Indices para acelerar los reportes de préstamos por usuario o por libro
db.prestamos.createIndex({ codigo_usuario: 1 });
db.prestamos.createIndex({ codigo_libro: 1 });

// Indice para agilizar las consultas de fechas límite (ej. préstamos a punto de vencer)
db.prestamos.createIndex({ "fechas.fecha_limite_devolucion": 1 });
