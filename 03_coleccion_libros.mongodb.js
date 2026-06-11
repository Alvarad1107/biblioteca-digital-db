// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Creación de la colección libros.

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

// Inserción de datos.

db.insertMany([
    {
        codigo_libro: 'LIB0001',
        titulo: "Agua para chocolate",
        anio_publicacion: NumberInt(1989),
        autores: [
    {
        codigo_autor: 'AUT0001',
        nombre_completo: 'Laura Esquivel'
    }
  ],
    categorias: [
    'Novela',
    'Realismo mágico'
  ],
  existencias_totales: NumberInt('20'),
  existencias_disponibles: NumberInt('15'),
  estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0002',
        titulo: "Adios Job",
        anio_publicacion: NumberInt(1961),
        autores: [
    {
        codigo_autor: 'AUT0002',
        nombre_completo: 'Emma Dolujanoff'
    }
  ],
    categorias: [
    'Novela',
    'Psicológica'
  ],
  existencias_totales: NumberInt('10'),
  existencias_disponibles: NumberInt('5'),
  estado: 'Activo'
    },
        {
        codigo_libro: 'LIB0003',
        titulo: "Al filo del agua", 
        anio_publicacion: NumberInt(1947),
        autores: [
    {       
        codigo_autor: 'AUT0003',
        nombre_completo: 'Agustín Yáñez'
    }
    ],
    categorias: [
    'Novela',
    'Psicológica'
                ],
  existencias_totales: NumberInt('10'),
  existencias_disponibles: NumberInt('5'),
  estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0004',
        titulo:"Antonia",
        anio_publicacion: NumberInt(1871,1873),
        autores: [
    {
        codigo_autor: 'AUT0004',
        nombre_completo: 'Ignacio Manuel Altamirano'
    }
    ],
    categorias:[
    "Novela corta",
    "Romanticismo literario hispanoamericano"
    ],
  existencias_totales: NumberInt('15'),
  existencias_disponibles: NumberInt('5'),
  estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0005',
        titulo:"Heart of Aztlán (Corazón de Aztlán)",
        anio_publicacion: NumberInt(1976),
        autores: [
    {
        codigo_autor: 'AUT0005',
        nombre_completo: 'Rudolfo Anaya'
    }   
    ],
    categorias:[
    "Novela",
    "Realismo mágico"
    ],
  existencias_totales: NumberInt('20'),
  existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
        },
    {
        codigo_libro: 'LIB0006',
        titulo:"La región más transparente",
        anio_publicacion: NumberInt(1958),
        autores: [
    {
        codigo_autor: 'AUT0006',
        nombre_completo: 'Carlos Fuentes'
    }   
    ],
    categorias:[
    "Novela",
    "mito",
    "historia de mexico"
    ],
  existencias_totales: NumberInt('25'),
  existencias_disponibles: NumberInt('20'),
    estado: 'Activo'
        },
    {
        codigo_libro: 'LIB0007',
        titulo:"Juventud en éxtasis",
        anio_publicacion: NumberInt(1994),
        autores: [
    {
        codigo_autor: 'AUT0007',
        nombre_completo: 'Carlos Cuauhtémoc Sánchez'
    }
    ],
    categorias:[
    "Novela",
    "drama",
    "romance"
    ],
  existencias_totales: NumberInt('30'),
    existencias_disponibles: NumberInt('25'),
    estado: 'Activo'
        },
    {
        codigo_libro: 'LIB0008',
        titulo:"Soy de aquí y soy de alla",
        anio_publicacion: NumberInt(1994),
        autores: [
    {
        codigo_autor: 'AUT0008',
        nombre_completo: 'Santiago Genovés'
    }
    ],
    categorias:[
    "Ensayo Literario",
    "Historico"
    ],
  existencias_totales: NumberInt('20'),
    existencias_disponibles: NumberInt('15'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0009',
        titulo:"el amor y la amistad en el mexico",
        anio_publicacion: NumberInt(1952),
        autores: [
    {
        codigo_autor: 'AUT0009',
        nombre_completo: 'Salvador Reyes Nevares'
    }
    ],
    categorias:[
    "Ensayo Filosofico",
    "Historico"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0010',
        titulo:"El águila y la serpiente",
        anio_publicacion: NumberInt(1928),
        autores: [
    {
        codigo_autor: 'AUT0010',
        nombre_completo: 'Martín Luis Guzmán'
    }
    ],
    categorias:[
    "Novela",
    "Revolución Mexicana"
    ],
    existencias_totales: NumberInt('20'),
    existencias_disponibles: NumberInt('15'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0011',
        titulo:"Leyendas Mexianas",
        anio_publicacion: NumberInt(1943),
        autores: [
    {
        codigo_autor: 'AUT0011',
        nombre_completo: 'Artemio de Valle Arizpe'
    }
    ],
    categorias:[
    "Antologia",
    "Cuentos",
    "Relatos"
    ],
    existencias_totales: NumberInt('10'),
    existencias_disponibles: NumberInt('5'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0012',
        titulo:"El Periquillo Sarniento",
        anio_publicacion: NumberInt(1816),
        autores: [
    {
        codigo_autor: 'AUT0012',
        nombre_completo: 'José Joaquín Fernández de Lizardi'
    }
    ],
    categorias:[
    "Novela",
    "Picaresca"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0013',
        titulo:"Voz adolorida",
        anio_publicacion: NumberInt(1961),
        autores: [
    {
        codigo_autor: 'AUT0013',
        nombre_completo: 'Vicente Leñero'
    }
    ],
    categorias:[
    "Psicologica",
    "Narrativa de Vanguardia",
    "Experimental"
    ],
    existencias_totales: NumberInt('20'),
    existencias_disponibles: NumberInt('15'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0014',
        titulo:"Los de abajo",
        anio_publicacion: NumberInt(1915),
        autores: [
    {
        codigo_autor: 'AUT0014',
        nombre_completo: 'Mariano Azuela'
    }
    ],
    categorias:[
    "Novela",
    "Novela de la Revolución Mexicana"
    ],
    existencias_totales: NumberInt('25'),
    existencias_disponibles: NumberInt('20'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0015',
        titulo:"Matacandela",
        anio_publicacion: NumberInt(1987),
        autores: [
    {
        codigo_autor: 'AUT0015',
        nombre_completo: 'Manou Dornbierer'
    }
    ],
    categorias:[
    "Dramatica",
    "Realista"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0016',
        titulo:"Retrato hablado",
        anio_publicacion: NumberInt(1976),
        autores: [
    {
        codigo_autor: 'AUT0016',
        nombre_completo: 'Manou Dornbierer'
    }
    ],
    categorias:[
    "Novela politica",
    "Ficcion documental"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0017',
        titulo:"Oda al Ciudadano General Francisco Morazan",
        anio_publicacion: NumberInt(1842),
        autores: [
    {
        codigo_autor: 'AUT0017',    
        nombre_completo: 'Miguel Álvarez Castro'
    }
    ],
    categorias:[
    "Lirica",
    "Poesia",
    "Oda"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
    {
        codigo_libro: 'LIB0018',
        titulo:"Cuentos y Narraciones",
        anio_publicacion: NumberInt(1931),
        autores: [
    {
        codigo_autor: 'AUT0018',
        nombre_completo: 'Francisco Gavidia'
    }
    ],
    categorias:[
    "Antologia",
    "Cuentos",
    "Relatos"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
        {
        codigo_libro: 'LIB0019',
        titulo:"El libro del trópico",
        anio_publicacion: NumberInt(1907),
        autores: [
    {
        codigo_autor: 'AUT0019',
        nombre_completo: 'Arturo Ambrogi'
    }
    ],
    categorias:[
    "Cronicas literarias",
    "Narrativa"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
        {
        codigo_libro: 'LIB0020',
        titulo:"Las siete cuerdas de la lira",
        anio_publicacion: NumberInt(1926),
        autores: [
    {   
        codigo_autor: 'AUT0020',
        nombre_completo: 'Alberto Masferrer'
    }   
    ],
    categorias:[
    "Ensayo",
    "Filosofico"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
            {
        codigo_libro: 'LIB0021',
        titulo:"Andanzas y Malandanzas",
        anio_publicacion: NumberInt(1936),
        autores: [
    {
        codigo_autor: 'AUT0021',
        nombre_completo: 'Alberto Rivas Bonilla'
    }
    ],
    categorias:[
    "Novela Picaresca",
    "Narrativa Costumbrista"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
            {
        codigo_libro: 'LIB0022',
        titulo:"Corason con S",
        anio_publicacion: NumberInt(1941),
        autores: [
    {
        codigo_autor: 'AUT0022',
        nombre_completo: 'Serafin Quiteño'
    }
    ],
    categorias:[
    "Poesia Lirica Intima",
    "Lirica Conversacional"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
    },
            {
        codigo_libro: 'LIB0023',
        titulo:"La Princesa Citala",
        anio_publicacion: NumberInt(1946),
        autores: [
    {
        codigo_autor: 'AUT0023',
        nombre_completo: 'Raul Contreras'
    }
    ],
    categorias:[
    "Drama",
    "Historico",
    "Mitologica"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
                {
        codigo_libro: 'LIB0024',
        titulo:"Campanario",
        anio_publicacion: NumberInt(1941),
        Editorial:"Editorial Universitaria",
        autores: [
    {
        codigo_autor: 'AUT0024',
        nombre_completo: 'Ricardo Triagueros de León'
    }
    ],
    categorias:[
    "Prosa Poetica",
    "Poesia",
    "Lirica",
    "Bucolica"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0025',
        titulo:"La Muerte de la Tortola",
        anio_publicacion: NumberInt(1932),
        Editorial:"Editorial Universitaria",
        autores: [
    {
        codigo_autor: 'AUT0025',
        nombre_completo: 'Jose Maria Peralta Lagos'
    }
    ],
    categorias:[
    "Novela",
    "Narrativa satírica",
    "Parodia política y de prensa"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0026',
        titulo:"Pacuas de oro",
        anio_publicacion: NumberInt(1947),
        Editorial:"Editorial Universitaria",
        autores: [
    {
        codigo_autor: 'AUT0026',
        nombre_completo: 'Vicente Rosales y Rosales'
    }
    ],
    categorias:[
    "Lirica",
    "Poesia",
    "Lirica Mistica"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0027',
        titulo:"A la Salida del vapor",
        anio_publicacion: NumberInt(1850),
        Editorial:"Editorial Universitaria",
        autores: [
    {
        codigo_autor: 'AUT0027',
        nombre_completo: 'Juan José Cañas'
    }
    ],
    categorias:[
    "Estructura Clasica",
    "El Contexto Realista",
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0028',
        titulo:"Cuentos de barro",
        anio_publicacion: NumberInt(1933),
        Editorial:"Editorial Universitaria",
        autores: [
    {
        codigo_autor: 'AUT0028',
        nombre_completo: 'Salvador Salazar Arrué'
    }
    ],
    categorias:[
    "Antologia de cuentos",
    "Prosa Poetica",
    "Narrativa"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0029',
        titulo:"Mitologia de Cuscatlan",
        anio_publicacion: NumberInt(1919),
        Editorial:"Editorial Universitaria",    
        autores: [
    {
        codigo_autor: 'AUT0029',
        nombre_completo: 'Miguel Ángel Espino'
    }
    ],
    categorias:[
    "Relatos",
    "Leyendas",
    "Antologia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0030',
        titulo:"El Asco",
        anio_publicacion: NumberInt(1997),
        Editorial:"Editorial Universitaria",
        autores: [
    {
        codigo_autor: 'AUT0030',
        nombre_completo: 'Horacio Castellanos Moya'
    }
    ],
    categorias:[
    "Novela",
    "Ficcion Politica",
    "Critica Social"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0031',
        titulo:"",
        anio_publicacion: NumberInt(),
        autores: [
    {
        codigo_autor: 'AUT0031',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0032',
        titulo:"",
        anio_publicacion: NumberInt(),
        autores: [
    {
        codigo_autor: 'AUT0032',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0033',
        titulo:"",
        anio_publicacion: NumberInt(),
        autores: [
    {
        codigo_autor: 'AUT0033',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0034',
        titulo:"",
        anio_publicacion: NumberInt(),
        autores: [
    {
        codigo_autor: 'AUT0034',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0035',
        titulo:"",
        anio_publicacion: NumberInt(),
        autores: [
    {
        codigo_autor: 'AUT0035',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0036',
        titulo:"",
        anio_publicacion: NumberInt(),
        autores: [
    {
        codigo_autor: 'AUT0036',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0037',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0037',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0038',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0038',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0039',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0039',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0040',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0040',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0041',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0041',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0042',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0042',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0043',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0043',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0044',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0044',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0045',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0045',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0046',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0046',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0047',
        titulo:"El libro de las sombras",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0047',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0048',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0048',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0049',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0049',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0050',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0050',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0051',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0051',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0052',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0052',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0053',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0053',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0054',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0054',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0055',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0055',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0056',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0056',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0057',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0057',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0058',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0058',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0059',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0059',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
},
            {
        codigo_libro: 'LIB0060',
        titulo:"",
        anio_publicacion: NumberInt(1938),
        autores: [
    {
        codigo_autor: 'AUT0060',
        nombre_completo: ''
    }
    ],
    categorias:[
    "Novela",
    "Narrativa de Vanguardia"
    ],
    existencias_totales: NumberInt('15'),
    existencias_disponibles: NumberInt('10'),
    estado: 'Activo'
}

]
)
