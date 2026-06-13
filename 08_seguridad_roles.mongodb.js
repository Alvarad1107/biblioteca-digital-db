// Módulo: Diseño de Bases de Datos No Relacionales
use("Biblioteca_Digital");

// Rol: Bibliotecario
// Solo puede leer el catálogo, pero puede leer, crear y modificar préstamos.
db.createRole({
  role: "rol_bibliotecario_estricto",
  privileges: [
    {
      resource: { db: "Biblioteca_Digital", collection: "prestamos" },
      actions: ["find", "insert", "update"]
    },
    {
      resource: { db: "Biblioteca_Digital", collection: "Libros" },
      actions: ["find"]
    },
    {
      resource: { db: "Biblioteca_Digital", collection: "Autores" },
      actions: ["find"]
    },
    {
      resource: { db: "Biblioteca_Digital", collection: "usuario" },
      actions: ["find"]
    }
  ],
  roles: []
});

// Usuario: Bibliotecario Operativo
// Se le asigna el rol personalizado que acabamos de crear, blindando la base de datos contra borrados accidentales de libros o autores.
db.createUser({
  user: "biblio_roberto",
  pwd: "PasswordBiblio2026",
  roles: [
    { role: "rol_bibliotecario_estricto", db: "Biblioteca_Digital" }
  ]
});


// Usuario: Supervisor
// Tiene el rol genérico 'readWrite' que le permite auditar, leer y modificar cualquier colección, ideal para sacar los reportes complejos.
db.createUser({
  user: "super_maria",
  pwd: "PasswordSuper2026",
  roles: [
    { role: "readWrite", db: "Biblioteca_Digital" }
  ]
});

// Usuario: Administrador del Sistema
// Tiene el rol genérico 'dbOwner' que le da control absoluto sobre la base de datos.
db.createUser({
  user: "admin_elena",
  pwd: "PasswordAdminSeguro2026",
  roles: [
    { role: "dbOwner", db: "Biblioteca_Digital" }
  ]
});
