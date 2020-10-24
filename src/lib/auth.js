//exporta la configuracion
module.exports={
    Logeo (req,res,next) {
        if(req.isAuthenticated()) //metodo de autenticacion
        return next()
         res.redirect('/usuario'); //ruta del login
    }
}