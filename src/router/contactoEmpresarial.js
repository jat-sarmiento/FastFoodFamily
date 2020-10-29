const express = require('express'); 
const router = express.Router();

const {vista}=require("../controller/contactoEmpresarial")

router.get("/contactoEmpresarial",vista)
module.exports=router