module.exports={

    database:{
        connectionLimit:10, //limite de conexión de proyectos a base de datos
        host:process.env.DATABASE_HOST || "localhost", //conexionlocal-puerto de conexion (conexion a la base datos)
        user:process.env.DATABASE_USER || "root", // usuario de conexion de la base de datos (root es el usuario de MySQL por defecto)
        password:process.env.DATABASE_PASSWORD || "", //CONTRASEÑA DE LA BASE DE DATOS (CAMPO VACIO XQ MY SQL NO TIENE CONTRASEÑA)
        database:process.env.DATABASE_NAME || "fastFoodFamily", //LLAMAR A LA BASE DE DATOS(conexion segun el nombre)
     }
}