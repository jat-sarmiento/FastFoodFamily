const express = require('express');
const router = express.Router();

const{registro,mostrarRegistro,mostrarLogin,login,logout}=require("../controller/auth.controller")
router.get("/crearUsuario",mostrarRegistro)
router.post("/crearUsuario",registro)
router.get("/login",mostrarLogin)
router.post("/login",login)
router.get("/logout",logout)

module.exports=router