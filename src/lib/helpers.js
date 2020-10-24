const bycrypt= require("bcryptjs")


const helpers = {} 

helpers.encryptPassword=async(password) =>{
    const salto=await bycrypt.genSalt(10)
    const hash=await bycrypt.hash(password,salto)
    return hash
}

helpers.matchPassword=async(password,savedPassword) =>{
    try {
        return await bycrypt.compare(password,savedPassword)
    } catch (e){
        console.log(e)} //error imprimir
}

module.exports= helpers 