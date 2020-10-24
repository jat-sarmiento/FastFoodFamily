const passport = require("passport");
const localStrategy = require("passport-local").Strategy //crear una estrategia de seguridad para el logeo y programa

const pool = require("../database") 
const helpers= require("./helpers")

passport.use(
    "   ",
    new localStrategy({
        usernameField: "username",
        passwordField: "password",
        passReqToCallback: true
    },
    async (req,username,password,done) =>{
        const rows = await pool.query("SELECT * FROM usuario WHERE username = ?",[username]) //traer todos los usuarios en la tabla el usuario que este ingresando 
     if(rows.lenght >0){
         const user =rows[0]
         const validarContraseña=await helpers.matchPassword(password,user.password);
     if(validarContraseña){
         done(null, user, req.flash("success", "ingreso exitoso" + user.username))
     } else {
         done(null, false, req.flash("mensaje", "no ingreso bien sus datos"))
     }
     } else {
         return done(
            null,
            false,
            req.flash("mensaje", "usuario no identificado")
         )
     }  
    }
    )
)

passport.use(
    "local.signup",
    new localStrategy(
        {
            usernameField: "username",
            passwordField: "password",
            passReqToCallback: true
        }, 
        async (req,username,password,done) => {
            const {estadoDeInicioDeSesion} = req.body
            let nuevoRegistro={
                estadoDeInicioDeSesion,
                username,
                password
            };
            nuevoRegistro.password=await helpers.encryptPassword(password) //encriptar contraseña
            const guardado=await pool.query("INSERT INTO usuario SET ?", nuevoRegistro)
            nuevoRegistro.id= guardado.insertId
            return done(null,nuevoRegistro)
        }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    const consultaPassword=await pool.query("SELECT * FROM usuario WHERE idUsuario=? ",[id])
    done (null,consultaPassword[0])
})
