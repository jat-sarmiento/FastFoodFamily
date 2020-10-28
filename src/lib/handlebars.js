const timeago =require("timeago.js") //require= llamando a la libreria dentro de las comillas
const timeagoinstance= timeago //para cuando haga un registro guarde automaticamente dentro de la libreria timeagotimeagoinstance(tiempo exacto fecha y hora)
const helpers ={} // contenedor donde guardamos toda la configuración del método o arreglos ejm {}
helpers.timeago=(savedtimestanp) =>{ //guardar el mismo formato del computador(hora y fecha exacta dia/mes/año)
    return timeagoinstance.format(savedtimestanp)
}
module.exports=helpers //exportar configuracion