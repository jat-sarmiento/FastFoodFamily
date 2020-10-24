const express = require('express');
const router = require('./index.router');

const{Logeo}=require ("../lib/auth")
const{vista}=require("../controller/user.controller")
router.get("/usuario",Logeo,vista)
module.exports=router