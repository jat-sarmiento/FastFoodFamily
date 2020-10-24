const passport = require("passport")

const authController ={}

authController.mostrarRegistro=(req,res)=>{
    res.render("loginCrearUsuario");
}

authController.registro=passport.authenticate("local.signup",{
    successRedirect: "/usuario",
    failureRedirect: "/crearUsuario",
    failureFlash: true
})

authController.mostrarLogin=(req,res) =>{
    res.render("login");
}

authController.login=passport.authenticate("local.signin",{
    successRedirect: "/usuario",
    failureRedirect: "/login",
    failureFlash: true
})

authController.logout=(req,res,next) =>{
    req.logOut()
     res.redirect('/');
}
module.exports=authController