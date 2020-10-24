const timeago =require("timeago.js")
const timeagoinstance= timeago //para cuando haga un registro guarde automaticamente dentro de la libreria timeagotimeagoinstance
const helpers ={} // contenedor donde guardamos todo ejm {}
helpers.timeago=(savedtimestanp) =>{
    return timeagoinstance.format(savedtimestanp)
}
module.exports=helpers //exportar configuracion