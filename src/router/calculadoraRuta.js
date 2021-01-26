const express = require('express');
const router = express.Router();
const{renderInicio}=require("../controller/controlCalculadora")
router.get("/",renderInicio)
module.exports=router
