const express = require('express'); 
const router = express.Router();

const {vista}=require("../controller/quienesSomos")

router.get("/quienesSomos",vista)
module.exports=router