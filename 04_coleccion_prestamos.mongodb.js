// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Creación de la colección prestamos.
db.createCollection("Prestamos", {
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
          pattern: "PR-[0-9]{4}",
          description: "El código único del préstamo es obligatorio"
        },
        codigo_usuario: {
          bsonType: "string",
          pattern: "USR-[0-9]{5}",
          description: "Referencia al código del estudiante o usuario (obligatorio)"
        },
        codigo_libro: {
          bsonType: "string",
          pattern: "LIB-[0-9]{4}",
          description: "Referencia al código del libro prestado (obligatorio)"
        },
        fechas: {
          bsonType: "object",
          required: ["fecha_salida", "fecha_devolucion_esperada"],
          properties: {
            fecha_salida: {
              bsonType: "date",
              description: "Fecha en la que se realiza el préstamo"
            },
            fecha_devolucion_esperada: {
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
          enum: ["Activo", "Devuelto", "Atrasado"],
          description: "Controla en qué estado se encuentra el préstamo"
        }
      }
    }
  }
});

// Inseción de datos.
db.prestamos.insertMany([
  {
    codigo_prestamo: "PR-5001",
    libro: {
      codigo_libro: "LIB-0001",
      titulo: "Agua para chocolate"
    },
    usuario: {
      codigo_usuario: "USR-ASI-003",
      nombre_completo: "María Fernanda López"
    },
    
    fechas: {
      fecha_salida: new Date("2026-05-20T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-27T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-20T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5002",
    libro:{
      codigo_libro: "LIB-0002",
      titulo: "Adios Job"
    },
    usuario:{
      codigo_usuario: "USR-ASI-003",
      nombre_completo: "María Fernanda López"
    },
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-17T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-22T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5003",
    libro:{
      codigo_libro: "LIB-0004",
      titulo: "Antonia"
    },
    usuario:{
      codigo_usuario: "USR-BIB-002",
      nombre_completo: "Roberto Gómez"
    },
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-20T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-25T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5004",
    libro:{
      codigo_libro: "LIB-0006",
      titulo: "La región más transparente"
    },
    usuario:{
      codigo_usuario: "USR-BIB-002",
      nombre_completo: "Roberto Gómez"
    },
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-04-17T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-19T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  
])
