// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Creación de la colección prestamos.
db.createCollection("prestamos", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "codigo_prestamo",
        "codigo_usuario",
        "codigo_libro",
        "fechas",
        "estado_prestamo"
      ],
      properties: {
        codigo_prestamo: {
          bsonType: "string",
          pattern: "^PR-[0-9]{4}$",
          description: "El código único del préstamo es obligatorio"
        },
        codigo_usuario: {
          bsonType: "string",
          pattern: "^USR-[A-Z]{3}-[0-9]{3}$",
          description: "Referencia al código del estudiante o usuario (obligatorio)"
        },
        codigo_libro: {
          bsonType: "string",
          pattern: "^LIB[0-9]{4}$", 
          description: "Referencia al código del libro prestado (obligatorio)"
        },
        fechas: {
          bsonType: "object",
          required: ["fecha_salida", "fecha_limite_devolucion"], 
          properties: {
            fecha_salida: {
              bsonType: "date",
              description: "Fecha en la que se realiza el préstamo"
            },
            fecha_limite_devolucion: {
              bsonType: "date",
              description: "Fecha límite acordada para devolver el libro"
            },
            fecha_devolucion_real: {
              bsonType: "date",
              description: "Fecha en la que realmente se entregó"
            }
          },
          description: "Documento embebido con el historial de fechas"
        },
        estado_prestamo: {
          bsonType: "string",
          enum: ["Activo", "Devuelto", "Retrasado"],
          description: "Controla en qué estado se encuentra el préstamo"
        }
      }
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});

// Inserción de datos.
db.prestamos.insertMany([
  {
    codigo_prestamo: "PR-5001",
    codigo_libro: "LIB0001",
    codigo_usuario: "USR-SUP-001",
    fechas: {
      fecha_salida: new Date("2026-05-20T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-27T00:00:00Z"),
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5002",
    codigo_libro: "LIB0002",
    codigo_usuario: "USR-SUP-001",
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-17T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-22T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5003",
    codigo_libro: "LIB0004",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-20T00:00:00Z"),
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5004",
    codigo_libro: "LIB0016",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-04-17T00:00:00Z"),
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5005",
    codigo_libro: "LIB0008",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-01T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-08T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-06T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5006",
    codigo_libro: "LIB0009",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-02T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-09T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5007",
    codigo_libro: "LIB0010",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-03T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-10T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5008",
    codigo_libro: "LIB0011",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-04T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-11T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-09T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5009",
    codigo_libro: "LIB0012",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-05T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-12T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5010",
    codigo_libro: "LIB0013",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-06T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-13T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5011",
    codigo_libro: "LIB0014",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-07T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-14T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-12T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5012",
    codigo_libro: "LIB0015",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-08T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-15T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5013",
    codigo_libro: "LIB0016",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-09T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-16T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5014",
    codigo_libro: "LIB0017",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-17T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-15T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5015",
    codigo_libro: "LIB0018",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-11T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-18T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5016",
    codigo_libro: "LIB0019",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-12T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-19T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5017",
    codigo_libro: "LIB0020",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-13T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-20T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-18T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5018",
    codigo_libro: "LIB0021",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-14T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-21T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5019",
    codigo_libro: "LIB0022",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-15T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-22T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5020",
    codigo_libro: "LIB0023",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-16T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-23T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-21T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5021",
    codigo_libro: "LIB0024",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-17T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-24T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5022",
    codigo_libro: "LIB0025",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-18T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-25T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5023",
    codigo_libro: "LIB0026",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-19T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-26T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-24T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5024",
    codigo_libro: "LIB0027",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-20T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-27T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5025",
    codigo_libro: "LIB0028",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-21T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-28T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5026",
    codigo_libro: "LIB0029",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-22T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-29T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-27T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5027",
    codigo_libro: "LIB0030",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-23T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-30T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5028",
    codigo_libro: "LIB0031",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-24T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-31T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5029",
    codigo_libro: "LIB0032",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-25T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-01T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-30T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5030",
    codigo_libro: "LIB0033",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-26T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-02T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5031",
    codigo_libro: "LIB0034",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-05-27T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-03T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5032",
    codigo_libro: "LIB0035",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-28T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-04T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-02T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5033",
    codigo_libro: "LIB0036",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-29T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-05T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5034",
    codigo_libro: "LIB0037",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-05-30T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-06T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5035",
    codigo_libro: "LIB0038",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-05-31T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-07T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-05T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5036",
    codigo_libro: "LIB0039",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-06-01T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-08T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5037",
    codigo_libro: "LIB0040",
    codigo_usuario: "USR-BIB-001",
    fechas: {
      fecha_salida: new Date("2026-06-02T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-09T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5038",
    codigo_libro: "LIB0041",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-06-03T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-10T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-08T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5039",
    codigo_libro: "LIB0042",
    codigo_usuario: "USR-BIB-002",
    fechas: {
      fecha_salida: new Date("2026-06-04T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-11T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5040",
    codigo_libro: "LIB0043",
    codigo_usuario: "USR-BIB-003",
    fechas: {
      fecha_salida: new Date("2026-06-05T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-12T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  }
]);