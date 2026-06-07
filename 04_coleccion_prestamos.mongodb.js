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
  {
    codigo_prestamo: "PR-5005",
    libro: {
      codigo_libro: "LIB-00017",
      titulo: "Poesias"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-01T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-08T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-06T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5006",
    libro: {
      codigo_libro: "LIB-00018",
      titulo: "Jupiter"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-02T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-09T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-10T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5007",
    libro: {
      codigo_libro: "LIB-00019",
      titulo: "El libro del tropico"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-03T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-10T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-12T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5008",
    libro: {
      codigo_libro: "LIB-00020",
      titulo: "Ensayo sobre el destino"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-04T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-11T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-09T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5009",
    libro: {
      codigo_libro: "LIB-00021",
      titulo: "El cuento de la mascara"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-05T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-12T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-11T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5010",
    libro: {
      codigo_libro: "LIB-00022",
      titulo: "Corazon adentro"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-06T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-13T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-15T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5011",
    libro: {
      codigo_libro: "LIB-00023",
      titulo: "La presencia de la poesia"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-07T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-14T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-12T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5012",
    libro: {
      codigo_libro: "LIB-00024",
      titulo: "La ventana en el rostro"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-08T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-15T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-14T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5013",
    libro: {
      codigo_libro: "LIB-00025",
      titulo: "Cuentos de barro"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-09T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-16T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-18T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5014",
    libro: {
      codigo_libro: "LIB-00026",
      titulo: "El turno del ofendido"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-10T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-17T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-15T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5015",
    libro: {
      codigo_libro: "LIB-00027",
      titulo: "El valle de las hamacas"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-11T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-18T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-17T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5016",
    libro: {
      codigo_libro: "LIB-00028",
      titulo: "Tierra de infancia"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-12T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-19T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-21T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5017",
    libro: {
      codigo_libro: "LIB-00029",
      titulo: "La sal del mundo"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-13T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-20T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-18T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5018",
    libro: {
      codigo_libro: "LIB-00030",
      titulo: "El dinero maldito"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-14T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-21T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-20T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5019",
    libro: {
      codigo_libro: "LIB-00031",
      titulo: "Luz negra"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-15T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-22T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-24T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5020",
    libro: {
      codigo_libro: "LIB-00032",
      titulo: "La cancion del mundo"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-16T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-23T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-21T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5021",
    libro: {
      codigo_libro: "LIB-00033",
      titulo: "Los faroles"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-17T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-24T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-23T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5022",
    libro: {
      codigo_libro: "LIB-00034",
      titulo: "Los cuentos de mi tia panchita"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-18T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-25T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-27T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5023",
    libro: {
      codigo_libro: "LIB-00035",
      titulo: "El asco"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-19T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-26T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-24T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5024",
    libro: {
      codigo_libro: "LIB-00036",
      titulo: "La diáspora"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-20T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-27T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-26T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5025",
    libro: {
      codigo_libro: "LIB-00037",
      titulo: "El arma en el hombre"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-21T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-28T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-30T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5026",
    libro: {
      codigo_libro: "LIB-00038",
      titulo: "La muerte de la paloma"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-22T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-29T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-27T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5027",
    libro: {
      codigo_libro: "LIB-00039",
      titulo: "El libro de los desvarios"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-23T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-30T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-29T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5028",
    libro: {
      codigo_libro: "LIB-00040",
      titulo: "La loca de gandoca"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-24T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-05-31T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-02T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5029",
    libro: {
      codigo_libro: "LIB-00041",
      titulo: "El tigre"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-25T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-01T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-05-30T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5030",
    libro: {
      codigo_libro: "LIB-00042",
      titulo: "La isla de los hombres solos"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-26T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-02T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-01T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5031",
    libro: {
      codigo_libro: "LIB-00043",
      titulo: "Cuentos de cipotes"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-27T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-03T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-05T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5032",
    libro: {
      codigo_libro: "LIB-00044",
      titulo: "El principito"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-28T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-04T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-02T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5033",
    libro: {
      codigo_libro: "LIB-00045",
      titulo: "El señor de las moscas"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-29T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-05T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-04T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5034",
    libro: {
      codigo_libro: "LIB-00046",
      titulo: "La sombra del viento"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-30T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-06T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-08T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5035",
    libro: {
      codigo_libro: "LIB-00047",
      titulo: "El alquimista"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-05-31T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-07T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-05T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5036",
    libro: {
      codigo_libro: "LIB-00048",
      titulo: "El codigo da vinci"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-01T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-08T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-07T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5037",
    libro: {
      codigo_libro: "LIB-00049",
      titulo: "El resplandor"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-02T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-09T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-11T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  },
  {
    codigo_prestamo: "PR-5038",
    libro: {
      codigo_libro: "LIB-00050",
      titulo: "It"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-03T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-10T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-08T00:00:00Z")
    },
    estado_prestamo: "Devuelto"
  },
  {
    codigo_prestamo: "PR-5039",
    libro: {
      codigo_libro: "LIB-00051",
      titulo: "Carrie"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-04T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-11T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-10T00:00:00Z")
    },
    estado_prestamo: "Activo"
  },
  {
    codigo_prestamo: "PR-5040",
    libro: {
      codigo_libro: "LIB-00052",
      titulo: "Misery"
    },
    usuario: {
      codigo_usuario: "",
      nombre_completo: ""
    },
    fechas: {
      fecha_salida: new Date("2026-06-05T00:00:00Z"),
      fecha_devolucion_esperada: new Date("2026-06-12T00:00:00Z"),
      fecha_devolucion_real: new Date("2026-06-14T00:00:00Z")
    },
    estado_prestamo: "Retrasado"
  }
])