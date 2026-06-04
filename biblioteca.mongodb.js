// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Colección Autores
db.createCollection("Autores", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["codigo_autor", "nombre", "apellido", "nacionalidad", "fecha_nacimiento", "estado"],
            properties: {
                codigo_autor: { 
                    bsonType: "string", 
                    pattern: "^AUT-[0-9]{4}$" 
                },
                nombre: { 
                    bsonType: "string", 
                    minLength: 1, 
                    maxLength: 60 
                },
                apellido: { 
                    bsonType: "string", 
                    minLength: 1, 
                    maxLength: 60 
                },
                nacionalidad: { 
                    bsonType: "string", 
                    minLength: 1, 
                    maxLength: 60 
                },
                fecha_nacimiento: { 
                    bsonType: "date" 
                },
                estado: { 
                    bsonType: "string", 
                    enum: ["Inactivo", "Activo"] 
                }
            }
        }
    }
});

// Colección Libros
db.createCollection("Libros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["codigo_libro", "titulo", "anio_publicacion", "autores", "categorias", "existencias_totales", "existencias_disponibles", "estado"],
            properties: {
                codigo_libro: { 
                    bsonType: "string", 
                    pattern: "^LIB-[0-9]{4}$" 
                },
                titulo: { 
                    bsonType: "string", 
                    minLength: 1, 
                    maxLength: 100 
                },
                anio_publicacion: { 
                    bsonType: "int", 
                    minimum: 0 
                },
                autores: {
                    bsonType: "array",  
                    items: {
                        bsonType: "object",
                        required: ["codigo_autor", "nombre_completo"]
                    }
                }
            }
        }
    }
});

// 2. Insertar Autores
db.Autores.insertMany([
    { 
        codigo_autor: "AUT-0001", 
        nombre: "Laura", 
        apellido: "Esquivel", 
        nacionalidad: "Mexicana", 
        fecha_nacimiento: new Date("1950-09-30"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0002", 
        nombre: "Emma", 
        apellido: "Dolujanoff", 
        nacionalidad: "Mexicana", 
        fecha_nacimiento: new Date("1922-12-08"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0003", 
        nombre: "Agustín", 
        apellido: "Yáñez", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1904-05-04"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0004", 
        nombre: "Ignacio Manuel", 
        apellido: "Altamirano", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1834-11-13"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0005", 
        nombre: "Rudolfo", 
        apellido: "Anaya", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1937-10-30"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0006", 
        nombre: "Carlos", 
        apellido: "Fuentes", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1928-11-11"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0007", 
        nombre: "Carlos Cuauhtémoc", 
        apellido: "Sánchez", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1964-04-15"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0008", 
        nombre: "Santiago", 
        apellido: "Genovés", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1923-12-31"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0009", 
        nombre: "Salvador", 
        apellido: "Reyes Nevares", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1924-11-21"), 
        estado: "Inactivo" 
    },
    { 
        codigo_autor: "AUT-0010", 
        nombre: "Martín Luis", 
        apellido: "Guzmán", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1887-10-06"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0011", 
        nombre: "Artemio de Valle", 
        apellido: "Arizpe", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1888-01-25"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0012", 
        nombre: "José Joaquín", 
        apellido: "Fernández de Lizardi", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1776-10-15"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0013", 
        nombre: "Vicente", 
        apellido: "Leñero", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1933-06-09"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0014", 
        nombre: "Mariano", 
        apellido: "Azuela", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1873-01-01"), 
        estado: "Activo" 
    },
    { 
        codigo_autor: "AUT-0015", 
        nombre: "Manou", 
        apellido: "Dornbierer", 
        nacionalidad: "Mexicana", 
        fecha_nacimiento: new Date("1936-12-10"), 
        estado: "Inactivo" 
    },
    { 
        codigo_autor: "AUT-0016", 
        nombre: "Luis", 
        apellido: "Spota", 
        nacionalidad: "Mexicano", 
        fecha_nacimiento: new Date("1925-06-13"), 
        estado: "Activo" 
    }
]);

// 3. Insertar Libros
db.Libros.insertMany([
    { 
        codigo_libro: 'LIB-0001', 
        titulo: "Agua para chocolate", 
        anio_publicacion: NumberInt(1989), 
        autores: [
            { 
                codigo_autor: 'AUT-0002', 
                nombre_completo: 'Emma Dolujanoff' 
            }
        ], 
        categorias: [
            'Novela', 
            'Realismo mágico'
        ], 
        existencias_totales: NumberInt(20), 
        existencias_disponibles: NumberInt(15), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0002', 
        titulo: "Adios Job", 
        anio_publicacion: NumberInt(1961), 
        autores: [
            { 
                codigo_autor: 'AUT-0002', 
                nombre_completo: 'Emma Dolujanoff' 
            }
        ], 
        categorias: [
            'Novela', 
            'Psicológica'
        ], 
        existencias_totales: NumberInt(10), 
        existencias_disponibles: NumberInt(5), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0003', 
        titulo: "Al filo del agua", 
        anio_publicacion: NumberInt(1947), 
        autores: [
            {       
                codigo_autor: 'AUT-0003', 
                nombre_completo: 'Agustín Yáñez' 
            }
        ], 
        categorias: [
            'Novela', 
            'Psicológica'
        ], 
        existencias_totales: NumberInt(10), 
        existencias_disponibles: NumberInt(5), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0004', 
        titulo: "Antonia", 
        anio_publicacion: NumberInt(1871), 
        autores: [
            { 
                codigo_autor: 'AUT-0004', 
                nombre_completo: 'Ignacio Manuel Altamirano' 
            }
        ], 
        categorias: [
            "Novela corta", 
            "Romanticismo literario hispanoamericano"
        ], 
        existencias_totales: NumberInt(15), 
        existencias_disponibles: NumberInt(5), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0005', 
        titulo: "Heart of Aztlán (Corazón de Aztlán)", 
        anio_publicacion: NumberInt(1976), 
        autores: [
            { 
                codigo_autor: 'AUT-0005', 
                nombre_completo: 'Rudolfo Anaya' 
            }   
        ], 
        categorias: [
            "Novela", 
            "Realismo mágico"
        ], 
        existencias_totales: NumberInt(20), 
        existencias_disponibles: NumberInt(10), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0006', 
        titulo: "La región más transparente", 
        anio_publicacion: NumberInt(1958), 
        autores: [
            { 
                codigo_autor: 'AUT-0006', 
                nombre_completo: 'Carlos Fuentes' 
            }   
        ], 
        categorias: [
            "Novela", 
            "mito", 
            "historia de mexico"
        ], 
        existencias_totales: NumberInt(25), 
        existencias_disponibles: NumberInt(20), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0007', 
        titulo: "Juventud en éxtasis", 
        anio_publicacion: NumberInt(1994), 
        autores: [
            { 
                codigo_autor: 'AUT-0007', 
                nombre_completo: 'Carlos Cuauhtémoc Sánchez' 
            }
        ], 
        categorias: [
            "Novela", 
            "drama", 
            "romance"
        ], 
        existencias_totales: NumberInt(30), 
        existencias_disponibles: NumberInt(25), 
        estado: 'Activo' 
    },
    { 
        codigo_libro: 'LIB-0008', 
        titulo: "El hombre de los hongos", 
        anio_publicacion: NumberInt(1976), 
        autores: [
            { 
                codigo_autor: 'AUT-0008', 
                nombre_completo: 'Santiago Genovés' 
            }
        ], 
        categorias: [
            "Novela"
        ], 
        existencias_totales: NumberInt(10), 
        existencias_disponibles: NumberInt(10), 
        estado: 'Activo' 
    }
]);