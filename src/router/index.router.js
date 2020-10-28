const express = require('express'); 
const router = express.Router();

const {vista}=require("../controller/index.controller")

router.get("/",vista)
module.exports=router