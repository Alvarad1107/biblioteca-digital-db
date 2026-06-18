// 1. Crear/Usar la base de datos
use("Biblioteca_Digital");

// Creación de la colección libros.

db.createCollection("Libros", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["codigo_libro", "titulo", "anio_publicacion", "autores", "categorias", "existencias_totales", "existencias_disponibles", "estado", "editorial"],
            properties: {
                codigo_libro: {
                    bsonType: "string",
                    pattern: "^LIB[0-9]{4}$"
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
                    minItems: 1,
                    items: {
                        bsonType: "object",
                        required: ["codigo_autor", "nombre_completo"],
                        properties: {
                            codigo_autor: {
                                bsonType: "string",
                                pattern: "^AUT[0-9]{4}$"
                            },
                            nombre_completo: {
                                bsonType: "string",
                                minLength: 1,
                                maxLength: 100
                            }
                        }
                    }
                },
                categorias: {
                    bsonType: "array",
                    minItems: 1,
                    items: {
                        bsonType: "string",
                        minLength: 1
                    }
                },
                existencias_totales: {
                    bsonType: "int",
                    minimum: 0
                },
                existencias_disponibles: {
                    bsonType: "int",
                    minimum: 0
                },
                estado: {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 20
                },
                editorial: {
                    bsonType: "string",
                    minLength: 1,
                    maxLength: 100
                }
            }
        }
    }
});

// Inserción de datos.

db.Libros.insertMany([
    {
        codigo_libro: "LIB0001",
        titulo: "Agua para chocolate",
        anio_publicacion: NumberInt(1989),
                Editorial: "Penguin Random House",

        autores: [
            {
                codigo_autor: "AUT0001",
                nombre_completo: "Laura Esquivel"
            }
        ],
        categorias: [
            "Novela",
            "Realismo mágico"
        ],
        existencias_totales: NumberInt(20),
        existencias_disponibles: NumberInt(15),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0002",
        titulo: "Adios Job",
        anio_publicacion: NumberInt(1961),
            Editorial: "Fondo de Cultura Económica",
        autores: [
            {
                codigo_autor: "AUT0002",
                nombre_completo: "Emma Dolujanoff"
            }
        ],
        categorias: [
            "Novela",
            "Psicológica"
        ],
        existencias_totales: NumberInt(10),
        existencias_disponibles: NumberInt(5),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0003",
        titulo: "Al filo del agua",
        anio_publicacion: NumberInt(1947),
        Editorial: "Fondo de Cultura Económica",
        autores: [
            {
                codigo_autor: "AUT0003",
                nombre_completo: "Agustín Yáñez"
            }
        ],
        categorias: [
            "Novela",
            "Psicológica"
        ],
        existencias_totales: NumberInt(10),
        existencias_disponibles: NumberInt(5),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0004",
        titulo: "Antonia",
        anio_publicacion: NumberInt(1871),
        Editorial: "publicaciones periódicas",
        autores: [
            {
                codigo_autor: "AUT0004",
                nombre_completo: "Ignacio Manuel Altamirano"
            }
        ],
        categorias: [
            "Novela corta",
            "Romanticismo literario hispanoamericano"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(5),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0005",
        titulo: "Heart of Aztlán (Corazón de Aztlán)",
        anio_publicacion: NumberInt(1976),
        Editorial: "Editorial Justa Publications",
        autores: [
            {
                codigo_autor: "AUT0005",
                nombre_completo: "Rudolfo Anaya"
            }
        ],
        categorias: [
            "Novela",
            "Realismo mágico"
        ],
        existencias_totales: NumberInt(20),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0006",
        titulo: "La región más transparente",
        anio_publicacion: NumberInt(1958),
        Editorial: "Fondo de Cultura Económica",
        autores: [
            {
                codigo_autor: "AUT0006",
                nombre_completo: "Carlos Fuentes"
            }
        ],
        categorias: [
            "Novela",
            "mito",
            "historia de mexico"
        ],
        existencias_totales: NumberInt(25),
        existencias_disponibles: NumberInt(20),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0007",
        titulo: "Juventud en éxtasis",
        anio_publicacion: NumberInt(1994),
        Editorial: "Ediciones Selectas Diamante",
        autores: [
            {
                codigo_autor: "AUT0007",
                nombre_completo: "Carlos Cuauhtémoc Sánchez"
            }
        ],
        categorias: [
            "Novela",
            "drama",
            "romance"
        ],
        existencias_totales: NumberInt(30),
        existencias_disponibles: NumberInt(25),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0008",
        titulo: "Soy de aquí y soy de allá",
        anio_publicacion: NumberInt(1994),
        Editorial: "Fondo de Cultura Económica",
        autores: [
            {
                codigo_autor: "AUT0008",
                nombre_completo: "Santiago Genovés"
            }
        ],
        categorias: [
            "Ensayo Literario",
            "Historico"
        ],
        existencias_totales: NumberInt(20),
        existencias_disponibles: NumberInt(15),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0009",
        titulo: "el amor y la amistad en el mexico",
        anio_publicacion: NumberInt(1952),
        Editorial: "Editorial Porrúa",
        autores: [
            {
                codigo_autor: "AUT0009",
                nombre_completo: "Salvador Reyes Nevares"
            }
        ],
        categorias: [
            "Ensayo Filosofico",
            "Historico"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0010",
        titulo: "El águila y la serpiente",
        anio_publicacion: NumberInt(1928),
        Editorial: "Editorial Aguilar",
        autores: [
            {
                codigo_autor: "AUT0010",
                nombre_completo: "Martín Luis Guzmán"
            }
        ],
        categorias: [
            "Novela",
            "Revolución Mexicana"
        ],
        existencias_totales: NumberInt(20),
        existencias_disponibles: NumberInt(15),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0011",
        titulo: "Leyendas Mexianas",
        anio_publicacion: NumberInt(1943),
        Editorial: "Editorial Selector",
        autores: [
            {
                codigo_autor: "AUT0011",
                nombre_completo: "Artemio de Valle Arizpe"
            }
        ],
        categorias: [
            "Antologia",
            "Cuentos",
            "Relatos"
        ],
        existencias_totales: NumberInt(10),
        existencias_disponibles: NumberInt(5),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0012",
        titulo: "El Periquillo Sarniento",
        anio_publicacion: NumberInt(1816),
        Editorial: "Editorial Porrúa",
        autores: [
            {
                codigo_autor: "AUT0012",
                nombre_completo: "José Joaquín Fernández de Lizardi"
            }
        ],
        categorias: [
            "Novela",
            "Picaresca"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0013",
        titulo: "Voz adolorida",
        anio_publicacion: NumberInt(1961),
        Editorial: "Universidad Veracruzana",
        autores: [
            {
                codigo_autor: "AUT0013",
                nombre_completo: "Vicente Leñero"
            }
        ],
        categorias: [
            "Psicologica",
            "Narrativa de Vanguardia",
            "Experimental"
        ],
        existencias_totales: NumberInt(20),
        existencias_disponibles: NumberInt(15),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0014",
        titulo: "Los de abajo",
        anio_publicacion: NumberInt(1915),
        Editorial: "El Paso del Norte",
        autores: [
            {
                codigo_autor: "AUT0014",
                nombre_completo: "Mariano Azuela"
            }
        ],
        categorias: [
            "Novela",
            "Novela de la Revolución Mexicana"
        ],
        existencias_totales: NumberInt(25),
        existencias_disponibles: NumberInt(20),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0015",
        titulo: "Matacandela",
        anio_publicacion: NumberInt(1987),
        Editorial: "Editorial Grijalbo",
        autores: [
            {
                codigo_autor: "AUT0015",
                nombre_completo: "Manou Dornbierer"
            }
        ],
        categorias: [
            "Dramatica",
            "Realista"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0016",
        titulo: "Retrato hablado",
        anio_publicacion: NumberInt(1976),
        Editorial: "Grijalbo",
        autores: [
            {
                codigo_autor: "AUT0016",
                nombre_completo: "Luis Spota"
            }
        ],
        categorias: [
            "Novela politica",
            "Ficcion documental"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0017",
        titulo: "Oda al Ciudadano General Francisco Morazan",
        anio_publicacion: NumberInt(1842),
        Editorial: "Secretaría de las Culturas",
        autores: [
            {
                codigo_autor: "AUT0017",
                nombre_completo: "General Francisco Morazán"
            }
        ],
        categorias: [
            "Lirica",
            "Poesia",
            "Oda"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0018",
        titulo: "Cuentos y Narraciones",
        anio_publicacion: NumberInt(1931),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0018",
                nombre_completo: "Francisco Gavidia"
            }
        ],
        categorias: [
            "Antologia",
            "Cuentos",
            "Relatos"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0019",
        titulo: "El libro del trópico",
        anio_publicacion: NumberInt(1907),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0019",
                nombre_completo: "Arturo Ambrogi"
            }
        ],
        categorias: [
            "Cronicas literarias",
            "Narrativa"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
    {
        codigo_libro: "LIB0020",
        titulo: "Las siete cuerdas de la lira",
        anio_publicacion: NumberInt(1926),
        Editorial:"Orientación",
        autores: [
            {
                codigo_autor: "AUT0020",
                nombre_completo: "Alberto Masferrer"
            }
        ],
        categorias: [
            "Ensayo",
            "Filosofico"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0021",
        titulo: "Andanzas y Malandanzas",
        anio_publicacion: NumberInt(1936),
        Editorial:"Editorial Jurídica Salvadoreña",
        autores: [
            {
                codigo_autor: "AUT0021",
                nombre_completo: "Alberto Rivas Bonilla"
            }
        ],
        categorias: [
            "Novela Picaresca",
            "Narrativa Costumbrista"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0022",
        titulo: "Corason con S",
        anio_publicacion: NumberInt(1941),
        Editorial:"Consejo Nacional para la Cultura y el Arte",
        autores: [
            {
                codigo_autor: "AUT0022",
                nombre_completo: "Serafin Quiteño"
            }
        ],
        categorias: [
            "Poesia Lirica Intima",
            "Lirica Conversacional"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0023",
        titulo: "Armonías íntimas",
        anio_publicacion: NumberInt(1919),
        Editorial:"Tipografía La Unión en San Salvador",
        autores: [
            {
                codigo_autor: "AUT0023",
                nombre_completo: "Raul Contreras"
            }
        ],
        categorias: [
            "Drama",
            "Historico",
            "Mitologica"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0024",
        titulo: "Campanario",
        anio_publicacion: NumberInt(1941),
        Editorial: "Biblioteca Nacional de El Salvador",
        autores: [
            {
                codigo_autor: "AUT0024",
                nombre_completo: "Ricardo Triagueros de León"
            }
        ],
        categorias: [
            "Prosa Poetica",
            "Poesia",
            "Lirica",
            "Bucolica"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0025",
        titulo: "La Muerte de la Tortola",
        anio_publicacion: NumberInt(1932),
        Editorial: "Funes & Ungo",
        autores: [
            {
                codigo_autor: "AUT0025",
                nombre_completo: "Jose Maria Peralta Lagos"
            }
        ],
        categorias: [
            "Novela",
            "Narrativa satírica",
            "Parodia política y de prensa"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0026",
        titulo: "Pacuas de oro",
        anio_publicacion: NumberInt(1947),
        Editorial: "Departamento Editorial del Ministerio de Cultura de El Salvado",
        autores: [
            {
                codigo_autor: "AUT0026",
                nombre_completo: "Vicente Rosales y Rosales"
            }
        ],
        categorias: [
            "Lirica",
            "Poesia",
            "Lirica Mistica"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0027",
        titulo: "A la Salida del vapor",
        anio_publicacion: NumberInt(1850),
        Editorial: "no tiene una editorial propia",
        autores: [
            {
                codigo_autor: "AUT0027",
                nombre_completo: "Juan José Cañas"
            }
        ],
        categorias: [
            "Estructura Clasica",
            "El Contexto Realista"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0028",
        titulo: "Cuentos de barro",
        anio_publicacion: NumberInt(1933),
        Editorial: "La Montaña",
        autores: [
            {
                codigo_autor: "AUT0028",
                nombre_completo: "Salvador Salazar Arrué"
            }
        ],
        categorias: [
            "Antologia de cuentos",
            "Prosa Poetica",
            "Narrativa"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0029",
        titulo: "Mitologia de Cuscatlan",
        anio_publicacion: NumberInt(1919),
        Editorial: "Imprenta Nacional",
        autores: [
            {
                codigo_autor: "AUT0029",
                nombre_completo: "Miguel Ángel Espino"
            }
        ],
        categorias: [
            "Relatos",
            "Leyendas",
            "Antologia"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0030",
        titulo: "El Asco",
        anio_publicacion: NumberInt(1997),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0030",
                nombre_completo: "Horacio Castellanos Moya"
            }
        ],
        categorias: [
            "Novela",
            "Ficcion Politica",
            "Critica Social"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0031",
        titulo: "A-B-Sudario",
        anio_publicacion: NumberInt(2023),
        Editorial: "Editorial Santillana",
        autores: [
            {
                codigo_autor: "AUT0031",
                nombre_completo: "Jacinta Escudos"
            }
        ],
        categorias: [
            "Posmoderna",
            "Experimental y Fragmentaria"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0032",
        titulo: "Un dia en la vida",
        anio_publicacion: NumberInt(1980),
        Editorial: "Editorial Universitaria Centroamericana",
        autores: [
            {
                codigo_autor: "AUT0032",
                nombre_completo: "Manlio Argueta"
            }
        ],
        categorias: [
            "Polifonica",
            "Novela Testimonial"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0033",
        titulo: "Una grieta en el agua",
        anio_publicacion: NumberInt(1972),
        Editorial: "Editorial Clásicos Roxsil",
        autores: [
            {
                codigo_autor: "AUT0033",
                nombre_completo: "David Escobar Galindo"
            }
        ],
        categorias: [
            "Novela Corta de Corte Psicologico",
            "Thirller Politico de Ficcion"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0034",
        titulo: "Dolor de Patria",
        anio_publicacion: NumberInt(1984),
        Editorial: "Clásicos Roxsil",
        autores: [
            {
                codigo_autor: "AUT0034",
                nombre_completo: "Jose Rutilio Quezada"
            }
        ],
        categorias: [
            "Ficcion Historico y Testimonial",
            "Narrativa de denuncia social y Agraria"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0035",
        titulo: "Los Cisnes",
        anio_publicacion: NumberInt(2013),
        Editorial: "Editorial Flor de Barro",
        autores: [
            {
                codigo_autor: "AUT0035",
                nombre_completo: "Carlos Anchetta"
            }
        ],
        categorias: [
            "Novela corta de Ficcion Meta-literaria",
            "Narrativa Existencial y Psicologica"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0036",
        titulo: "Luz negra",
        anio_publicacion: NumberInt(1962),
        Editorial: "Ministerio de Cultura (Departamento Editorial)",
        autores: [
            {
                codigo_autor: "AUT0036",
                nombre_completo: "Alvaro Menen Desleal"
            }
        ],
        categorias: [
            "Teatro del absurdo",
            "drama existencial de la dramatrugia"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0037",
        titulo: "Poemas",
        anio_publicacion: NumberInt(1967),
        Editorial: "Dirección de Publicaciones e Impresos",       
        autores: [
            {
                codigo_autor: "AUT0037",
                nombre_completo: "Alfonso Quijada Urias"
            }
        ],
        categorias: [
            "Lirico",
            "Poesia de Vanguardia",
            "Lirica Existencial y Psicologica"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0038",
        titulo: "Disparo en la catedral",
        anio_publicacion: NumberInt(1984),
        Editorial: "Editorial Diana",
        autores: [
            {
                codigo_autor: "AUT0038",
                nombre_completo: "Mario Bencastro"
            }
        ],
        categorias: [
            "Novela de Ficcion Historica",
            "Testimonial"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0039",
        titulo: "Vitrales",
        anio_publicacion: NumberInt(1987),
        Editorial: "Editorial Abril Uno",
        autores: [
            {
                codigo_autor: "AUT0039",
                nombre_completo: "Alvaro Dario Lara"
            }
        ],
        categorias: [
            "Lirico",
            " Poesia de la Generacion de los Ochenta"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0040",
        titulo: "Confesiones a Marcia",
        anio_publicacion: NumberInt(1970),
        Editorial: "Universidad de El Salvador",
        autores: [
            {
                codigo_autor: "AUT0040",
                nombre_completo: "Rafael Mendoza"
            }
        ],
        categorias: [
            "Lirico",
            "Poesia",
            "Generacion de los Setenta"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0041",
        titulo: "Equis o la pequeña historia de gran amor",
        anio_publicacion: NumberInt(1976),
        Editorial: "Dirección de Publicaciones de El Salvador",
        autores: [
            {
                codigo_autor: "AUT0041",
                nombre_completo: "Ricardo Lindo"
            }
        ],
        categorias: [
            "Novela Experimental",
            "Narrativa del Realismo Fantastico y Surrealismo."
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0042",
        titulo: "Real Diccionario de al Vigar Lengua Guanaca",
        anio_publicacion: NumberInt(2009),
        Editorial: "Ediciones Salvador Juárez",
        autores: [
            {
                codigo_autor: "AUT0042",
                nombre_completo: "Joaquin Meza"

            }
        ],
        categorias: [
            "Diccionario Lexicografico",
            "Linguistico"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0043",
        titulo: "El Corneta",
        anio_publicacion: NumberInt(1981),
        Editorial: "Editorial Guaymuras",
        autores: [
            {
                codigo_autor: "AUT0043",
                nombre_completo: "Roberto Castillo"
            }
        ],
        categorias: [
            "Novela",
            "Novela Corta"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0044",
        titulo: "El rostro en el espejo",
        anio_publicacion: NumberInt(2005),
        Editorial: "Rubén H. Dimas",
        autores: [
            {
                codigo_autor: "AUT0044",
                nombre_completo: "Carmen González Huguet"
            }
        ],
        categorias: [
            "Novela Corta de Ficcion Gotica",
            "Narrativa de Posguerra"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0045",
        titulo: "Soldado en Combate",
        anio_publicacion: NumberInt(2015),
        Editorial: "Comando de Doctrina y Educación Militar",
        autores: [
            {
                codigo_autor: "AUT0045",
                nombre_completo: "Carlos Balmore Fuentes"
            }
        ],
        categorias: [
            "Narrativa Testimonial",
            "Crónica Bélica"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0046",
        titulo: "El Salvador de 1970 a 1990: politica, economia y socidad",
        anio_publicacion: NumberInt(1999),
        Editorial: "Revista de Ciencias Sociales y Humanidades",
        autores: [
            {
                codigo_autor: "AUT0046",
                nombre_completo: "Luis Armando Gonzalez"
            }
        ],
        categorias: [
            "Ensayo Sociopolítico",
            "Filosófico"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0047",
        titulo: "La Ultima trinchera",
        anio_publicacion: NumberInt(1998),
        Editorial: "Índole Editores",
        autores: [
            {
                codigo_autor: "AUT0047",
                nombre_completo: "Marvin Galeas"
            }
        ],
        categorias: [
            "Narrativa Testimonial de Posguerra",
            "Periodismo Narrativo"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0048",
        titulo: "Taberna y otros lugares",
        anio_publicacion: NumberInt(1969),
        Editorial: "Casa de las Américas",
        autores: [
            {
                codigo_autor: "AUT0048",
                nombre_completo: "Roque Dalton"
            }
        ],
        categorias: [
            "Lirico",
            "Poesia Politica y de Collage Intelectual"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0049",
        titulo: "Estrellas en el Pozo",
        anio_publicacion: NumberInt(1934),
        Editorial: "Ediciones Convivio",
        autores: [
            {
                codigo_autor: "AUT0049",
                nombre_completo: "Claudia Lars"
            }
        ],
        categorias: [
            "Lirico",
            "Poesia"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0050",
        titulo: "Jicaras Tristes",
        anio_publicacion: NumberInt(1932),
        Editorial: "Universidad de El Salvador",
        autores: [
            {
                codigo_autor: "AUT0050",
                nombre_completo: "Alfredo Espino"
            }
        ],
        categorias: [
            "Poesia bucólica",
            "Pastoril y Paisajista"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0051",
        titulo: "Volcán en el tiempo",
        anio_publicacion: NumberInt(1947),
        Editorial: "Imprenta Nacional",
        autores: [
            {
                codigo_autor: "AUT0051",
                nombre_completo: "Oswaldo Escobar Velado"
            }
        ],
        categorias: [
            "Poesia social",
            "politica y de denuncia"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0052",
        titulo: "Canciones en el viento",
        anio_publicacion: NumberInt(1933),
        Editorial: "editorial no identificada",
        autores: [
            {
                codigo_autor: "AUT0052",
                nombre_completo: "Pedro Geoffroy Rivas"
            }
        ],
        categorias: [
            "Lirica",
            "Social"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0053",
        titulo: "Masferrer, alto pensador de Centroamérica",
        anio_publicacion: NumberInt(1961),
        Editorial: "Editorial del Ministerio de Educación Pública de Guatemala",
        autores: [
            {
                codigo_autor: "AUT0053",
                nombre_completo: "Matilde Elena Lopez"
            }
        ],
        categorias: [
            "Ensayos",
            "Crítica Literaria"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),

        estado: "Activo"
    },
            {
        codigo_libro: "LIB0054",
        titulo: "El libro de los sonetos",
        anio_publicacion: NumberInt(1970),
        Editorial: "Universidad Tecnológica de El Salvador",
        autores: [
            {
                codigo_autor: "AUT0054",
                nombre_completo: "Roberto Armijo"
            }
        ],
        categorias: [
            "Poesia"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0055",
        titulo: "Espacios",
        anio_publicacion: NumberInt(1955),
        Editorial: "casa de Arreola",
        autores: [
            {
                codigo_autor: "AUT0055",
                nombre_completo: "Mercedes Duran"
            }
        ],
        categorias: [
            "Significado",
            "Importancia"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0056",
        titulo: "Biografía de la ceniza",
        anio_publicacion: NumberInt(1959),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0056",
                nombre_completo: "Italo Lopez Vallecillos"
            }
        ],
        categorias: [
            "Lirico",
            "Poesia",
            "elegiaca  y de compromiso ético"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0057",
        titulo: "Noviembre",
        anio_publicacion: NumberInt(2015),
        Editorial: "Tusquets Editores",
        autores: [
            {
                codigo_autor: "AUT0057",
                nombre_completo: "Jorge Galán"
            }
        ],
        categorias: [
            "Novela histórica",
            "Narrativo",
            "thiller politico-testimonial"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0058",
        titulo: "Voces de la llanura",
        anio_publicacion: NumberInt(1972),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0058",
                nombre_completo: "Maura Echeverria"
            }
        ],
        categorias: [
            "Lirico",
            "Poesia paisajista"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    },
            {
        codigo_libro: "LIB0059",
        titulo: "La era del llanto",
        anio_publicacion: NumberInt(2006),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0059",
                nombre_completo: "Krisma Mancia"
            }
        ],
        categorias: [
            "Lirica",
            "Poesia urbana",
            "realismo sucio"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),


        estado: "Activo"
    },
            {
        codigo_libro: "LIB0060",
        titulo: "El ciervo perseguido",
        anio_publicacion: NumberInt(2013),
        Editorial: "Dirección de Publicaciones e Impresos",
        autores: [
            {
                codigo_autor: "AUT0060",
                nombre_completo: "Luis Alvarengua"
            }
        ],
        categorias: [
            "Didáctico",
            "Ensayo biográfico",
            "crítica literaria",
            "monografíca de investigación"
        ],
        existencias_totales: NumberInt(15),
        existencias_disponibles: NumberInt(10),
        estado: "Activo"
    }

]
)
