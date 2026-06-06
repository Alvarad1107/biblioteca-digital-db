// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Creación de la colección autores.

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

// Inserción de datos.

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