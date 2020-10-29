const indexCtrl ={} //guardar toda la informacion{}

indexCtrl.vista=(req,res)=>{
    res.render("quienesSomos"); // res.render(mostrar la vista inicial)
}
module.exports=indexCtrl