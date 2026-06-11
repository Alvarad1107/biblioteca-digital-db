// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Crear colección usuarios con validación.
db.createCollection("usuario", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["codigo_usuario", "nombre_completo", "correo", "clave", "nivel_acceso", "estado"],
            properties: {
                codigo_usuario: { 
                    bsonType: "string", 
                    pattern: "^USR-[A-Z]{3}-[0-9]{3}$" 
                },
                nombre_completo: { 
                    bsonType: "string", 
                    minLength: 3, 
                    maxLength: 100 
                },
                correo: { 
                    bsonType: "string", 
                    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" 
                },
                clave: { 
                    bsonType: "string", 
                    minLength: 8 
                },
                nivel_acceso: { 
                    bsonType: "string", 
                    enum: ["Administrador", "Bibliotecario", "Supervisor"] 
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
db.usuario.insertMany([
    { 
        "codigo_usuario": "USR-ADM-001", 
        "nombre_completo": "Elena Vásquez", 
        "correo": "elena.admin@biblioteca.com", 
        "clave": "admin1234", 
        "nivel_acceso": "Administrador", 
        "estado": "Activo" 
    },
    { 
        "codigo_usuario": "USR-SUP-001", 
        "nombre_completo": "María Fernanda López", 
        "correo": "maria.sup@biblioteca.com", 
        "clave": "super1234", 
        "nivel_acceso": "Supervisor", 
        "estado": "Activo" 
    },
    { 
        "codigo_usuario": "USR-BIB-001", 
        "nombre_completo": "Roberto Gómez", 
        "correo": "roberto.bib@biblioteca.com", 
        "clave": "biblio1234", 
        "nivel_acceso": "Bibliotecario", 
        "estado": "Activo" 
    },
    { 
        "codigo_usuario": "USR-BIB-002", 
        "nombre_completo": "Carlos Alberto Martínez", 
        "correo": "carlos.bib@biblioteca.com", 
        "clave": "biblio5678", 
        "nivel_acceso": "Bibliotecario", 
        "estado": "Activo" 
    },
    { 
        "codigo_usuario": "USR-BIB-003", 
        "nombre_completo": "Lucía Fernández", 
        "correo": "lucia.bib@biblioteca.com", 
        "clave": "biblio9012", 
        "nivel_acceso": "Bibliotecario", 
        "estado": "Activo" 
    }
]);