const passport = require("passport") // como extraer las librerias de passport (node modules)

const authController ={} //contenedor donde se va a guardar la información {}

authController.mostrarRegistro=(req,res)=>{ //funcion flecha =>{} req=pregunta res=respuesta
    res.render("loginCrearUsuario"); // res.render(mostrar la vista)
}

authController.registro=passport.authenticate("local.signup",{ //este metodo registro esta haciendo la autenticación del registro(validando el registro )
    successRedirect: "/usuario", //correcto llevarme a la siguiente vista =successRedirect=satisfactorio
    failureRedirect: "/crearUsuario", // vista crearUsuario(registro) failureRedirect=incorrecto
    failureFlash: true //si ocurre un error activar un mensaje automatico 
})

authController.mostrarLogin=(req,res) =>{ //los datos los tomamos del passport.js 
    res.render("login");
}

authController.login=passport.authenticate("local.signin",{
    successRedirect: "/usuario",
    failureRedirect: "/login",
    failureFlash: true
})

authController.logout=(req,res,next) =>{ //metodo creado logout "metodo de cierre"(llevarme a la pagina de inicio)
    req.logOut()
     res.redirect('/');
}
module.exports=authController //exportando la configuración que hay en esta pagina a todo el sistema