//exporta la configuracion
module.exports={
    Logeo (req,res,next) {
        if(req.isAuthenticated()) //metodo de autenticacion (req.isAuthenticated) para la ruta
        return next()
         res.redirect('/usuario'); //ruta del login (vista de usuario)
    }
}