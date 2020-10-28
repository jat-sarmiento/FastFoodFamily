const mysql=require("mysql"); //exportando libreriAAS del package json
const { promisify }= require('util'); //libreria llamada util que contiene promesas de la base de datos(consultas en la base de datos)

const{database}=require("./keys") //exportar la configuracion del keys(archivos)
const pool=mysql.createPool(database)//conexion directa con los datos de la configuracion keys

pool.getConnection((err,connection)=>{ //verificar si hay conexion de la base de datos
    if(err){
        if(err.code==="PROTOCOL_CONNECTION_LOST"){
            console.error("se cerró la conexion a la base de datos")
        }
        if(err.code==="ER_CON_COUNT_ERROR"){
            console.error("la base de datos sobrepasó el lmite de conexión")
        }
        if(err.code==="ECONNREFUSED"){
            console.error("la base de datos rechazó la conexión")
        }
    }
    if(connection) connection.release()
        console.log("base de datos conectada")

    return
}); //funcion de conexion () =>(funcion flecha)

//promesas del pool y querys
pool.query=promisify(pool.query) //todas las consultas seran promesas= "se ejecutan de una manera mas eficaz "

module.exports=pool //exportar para otro archivo toda la configuracion del pool

