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
          required: ["fecha_salida", "fecha_limite_devolucion", "fecha_devolucion_real"],
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
      fecha_devolucion_limite: new Date("2026-05-27T00:00:00Z"),
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
      fecha_devolucion_limite: new Date("2026-05-17T00:00:00Z"),
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
      fecha_devolucion_limite: new Date("2026-06-20T00:00:00Z"),
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5004",
    libro:{
      codigo_libro: "LIB-00016",
      titulo: "Cuentos de Lemon Twist"
    },
    usuario:{
      codigo_usuario: "USR-BIB-002",
      nombre_completo: "Roberto Gómez"
    },
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_devolucion_limite: new Date("2026-04-17T00:00:00Z"),
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5005",
    libro: {
      codigo_libro: "LIB-0008",
      titulo: "soy de aquí y soy de alla"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-01T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-08T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-06T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5006",
    libro: {
      codigo_libro: "LIB-0009",
      titulo: "el amor y la amistad en el mexico"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-02T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-09T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5007",
    libro: {
      codigo_libro: "LIB-00010",
      titulo: "el aguila y la serpiente"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-03T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-10T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5008",
    libro: {
      codigo_libro: "LIB-00011",
      titulo: "leyendas mexicanas"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-04T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-11T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-09T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5009",
    libro: {
      codigo_libro: "LIB-00012",
      titulo: "el periquillo sarniento"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-05T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-12T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5010",
    libro: {
      codigo_libro: "LIB-00013",
      titulo: "La Voz adolorida"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-06T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-13T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5011",
    libro: {
      codigo_libro: "LIB-00014",
      titulo: "Los de abajo"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-07T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-14T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-12T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5012",
    libro: {
      codigo_libro: "LIB-00015",
      titulo: "Matacandela"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-08T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-15T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5013",
    libro: {
      codigo_libro: "LIB-00016",
      titulo: "Retrato hablado"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-09T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-16T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5014",
    libro: {
      codigo_libro: "LIB-00017",
      titulo: "Oda al Ciudadano General Francisco Morazan"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-17T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-15T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5015",
    libro: {
      codigo_libro: "LIB-00018",
      titulo: "Cuentos y Narraciones"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-11T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-18T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5016",
    libro: {
      codigo_libro: "LIB-00019",
      titulo: "El libro del tropico"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-12T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-19T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5017",
    libro: {
      codigo_libro: "LIB-00020",
      titulo: "Las siete cuerdas de la lira"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-13T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-20T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-18T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5018",
    libro: {
      codigo_libro: "LIB-00021",
      titulo: "Andanzas y Malandanzas"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-14T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-21T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5019",
    libro: {
      codigo_libro: "LIB-00022",
      titulo: "Corason con S"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-15T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-22T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5020",
    libro: {
      codigo_libro: "LIB-00023",
      titulo: "La Princesa Citala"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-16T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-23T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-21T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5021",
    libro: {
      codigo_libro: "LIB-00024",
      titulo: "Campanario"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-17T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-24T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5022",
    libro: {
      codigo_libro: "LIB-00025",
      titulo: "La Muerte de la Tortola"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-18T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-25T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5023",
    libro: {
      codigo_libro: "LIB-00026",
      titulo: "Pacuas de oro"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-19T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-26T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-24T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5024",
    libro: {
      codigo_libro: "LIB-00027",
      titulo: "A la Salida del vapor"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-20T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-27T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5025",
    libro: {
      codigo_libro: "LIB-00028",
      titulo: "Cuentos de barro"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-21T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-28T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5026",
    libro: {
      codigo_libro: "LIB-00029",
      titulo: "Mitologia de Cuscatlan"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-22T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-29T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-27T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5027",
    libro: {
      codigo_libro: "LIB-00030",
      titulo: "El Asco"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-23T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-30T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5028",
    libro: {
      codigo_libro: "LIB-00031",
      titulo: "A-B-Sudario"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-24T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-05-31T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5029",
    libro: {
      codigo_libro: "LIB-00032",
      titulo: "Un dia en la vida"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-25T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-01T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-30T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5030",
    libro: {
      codigo_libro: "LIB-00033",
      titulo: "Una grieta en el agua"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-26T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-02T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5031",
    libro: {
      codigo_libro: "LIB-00034",
      titulo: "Dolor de Patria"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-27T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-03T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5032",
    libro: {
      codigo_libro: "LIB-00035",
      titulo: "Los Cisnes"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-28T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-04T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-02T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5033",
    libro: {
      codigo_libro: "LIB-00036",
      titulo: "Luz negra"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-29T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-05T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5034",
    libro: {
      codigo_libro: "LIB-00037",
      titulo: "Poemas"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-30T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-06T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5035",
    libro: {
      codigo_libro: "LIB-00038",
      titulo: "Disparo en la catedral"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-31T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-07T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-05T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5036",
    libro: {
      codigo_libro: "LIB-00039",
      titulo: "Vitrales"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-01T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-08T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5037",
    libro: {
      codigo_libro: "LIB-00040",
      titulo: "Confesiones a Marcia"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-02T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-09T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5038",
    libro: {
      codigo_libro: "LIB-00041",
      titulo: "Equis o la pequeña historia de gran amor"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-03T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-10T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-08T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5039",
    libro: {
      codigo_libro: "LIB-00042",
      titulo: "Real Diccionario de al Vigar Lengua Guanaca"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-04T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-11T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5040",
    libro: {
      codigo_libro: "LIB-00043",
      titulo: "El Corneta"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-05T00:00:00Z"),
      fecha_limite_devolucion: new Date("2026-06-12T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  }
])