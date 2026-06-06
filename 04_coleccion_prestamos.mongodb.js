// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Creación de la colección prestamos.
db.createCollection("Prestamos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "codigo_prestamo", 
                "codigo_estudiante", 
                "codigo_usuario", 
                "fecha_prestamo", 
                "fecha_devolucion_prevista", 
                "estado", 
                "detalles"
            ],
            properties: {
                codigo_prestamo: { 
                    bsonType: "string", 
                    pattern: "^PRE-[0-9]{5}$",
                    description: "Debe seguir el formato PRE-00001"
                },
                codigo_estudiante: { 
                    bsonType: "string",
                    description: "Referencia al carnet del estudiante"
                },
                codigo_usuario: { 
                    bsonType: "string",
                    description: "Referencia al bibliotecario o asistente que procesó el préstamo"
                },
                fecha_prestamo: { 
                    bsonType: "date" 
                },
                fecha_devolucion_prevista: { 
                    bsonType: "date" 
                },
                fecha_devolucion_real: { 
                    bsonType: ["date", "null"],
                    description: "Puede ser nulo si el libro aún no se ha devuelto"
                },
                estado: { 
                    bsonType: "string", 
                    enum: ["activo", "devuelto", "atrasado"] 
                },
                detalles: {
                    bsonType: "array",
                    minItems: 1,
                    description: "Arreglo que contiene los libros prestados (Detalle_Prestamo)",
                    items: {
                        bsonType: "object",
                        required: ["codigo_libro", "cantidad"],
                        properties: {
                            codigo_libro: { 
                                bsonType: "string" 
                            },
                            cantidad: { 
                                bsonType: "int", 
                                minimum: 1 
                            }
                        }
                    }
                }
            }
        }
    }
});

// Inseción de datos.
db.Prestamos.insertMany([
    {
        codigo_prestamo: "PRE-00001",
        codigo_estudiante: "EST-2024-001",
        codigo_usuario: "USR-BIB-002", // Procesado por Roberto Gómez
        fecha_prestamo: new Date("2026-06-01T08:30:00Z"),
        fecha_devolucion_prevista: new Date("2026-06-08T08:30:00Z"),
        fecha_devolucion_real: null,
        estado: "activo",
        detalles: [
            {
                codigo_libro: "LIB-0001", // Agua para chocolate
                cantidad: NumberInt(1)
            },
            {
                codigo_libro: "LIB-0003", // Al filo del agua
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00002",
        codigo_estudiante: "EST-2024-085",
        codigo_usuario: "USR-ASI-003", // Procesado por María Fernanda
        fecha_prestamo: new Date("2026-05-20T10:15:00Z"),
        fecha_devolucion_prevista: new Date("2026-05-27T10:15:00Z"),
        fecha_devolucion_real: new Date("2026-05-26T14:20:00Z"),
        estado: "devuelto",
        detalles: [
            {
                codigo_libro: "LIB-0006", // La región más transparente
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00003",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00004",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00005",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00006",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00007",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00008",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00009",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00010",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00011",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00012",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00013",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00014",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00015",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00016",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00017",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00018",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00019",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },
    {
        codigo_prestamo: "PRE-00020",
        codigo_estudiante: "EST-",
        codigo_usuario: "USR-ASI-", // Procesado por
        fecha_prestamo: new Date(""),
        fecha_devolucion_prevista: new Date(""),
        fecha_devolucion_real: new Date(""),
        estado: "activo",
        detalles: [
            {
                codigo_libro: "", //
                cantidad: NumberInt(1)
            }
        ]
    },

]);