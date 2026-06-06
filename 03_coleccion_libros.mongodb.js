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