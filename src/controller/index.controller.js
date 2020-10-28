const indexCtrl ={} //guardar toda la informacion{}

indexCtrl.vista=(req,res)=>{
    res.render("index"); // res.render(mostrar la vista inicial)
}
module.exports=indexCtrl