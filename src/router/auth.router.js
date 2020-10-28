const express = require('express'); //llamando la libreria de xpress y al metodo de express (router)
const router = express.Router();

const{registro,mostrarRegistro,mostrarLogin,login,logout}=require("../controller/auth.controller")
router.get("/crearUsuario",mostrarRegistro) //get=mostrar
router.post("/crearUsuario",registro)//post=enviar
router.get("/login",mostrarLogin)
router.post("/login",login)
router.get("/logout",logout)

module.exports=router