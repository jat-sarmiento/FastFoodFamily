const bycrypt= require("bcryptjs") //llamando la librería bcryptjs="encriptar contraseña"


const helpers = {} //guardar todo 

helpers.encryptPassword=async(password) =>{ //async=asincronico y orden exacto
    const salto=await bycrypt.genSalt(10) //await ayuda a la sincronizacion (orden) genSalt(10)"salto de la encriptacion"
    const hash=await bycrypt.hash(password,salto) //hash=await mezclar la encriptacion con la contraseña
    return hash //retorno de contraseña cifrada
}

helpers.matchPassword=async(password,savedPassword) =>{ //funcion flecha mas metodo matchpassword = me devuelve la contraseña y la guarda en una variable me devuelve descifrada
    try {
        return await bycrypt.compare(password,savedPassword)
    } catch (e){ //catch (e)= error estandarizado
        console.log(e)} //error imprimir
}

module.exports= helpers 