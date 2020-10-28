const passport = require("passport"); //llamar a la libreria
const LocalStrategy = require("passport-local").Strategy; //tener nuestras propias estrategias de logeo ("passport-local").Strategy

const pool = require("../database"); //llamando la configuracion de la base de datos
const helpers = require("./helpers"); //llamando la configuración en todos los contenedores helpers

passport.use( //para iniciar nuestra estrategia
  "local.signin",//estrategia de ingreso signin(metodo de ingreso)
  new LocalStrategy( //nueva estrategia de ingreso
    {
      usernameField: "username", //sentencias requeridas de estas vistas(consulta en la base de datos)
      passwordField: "password", //sentencias requeridas de estas vistas(consulta en la base de datos)
      passReqToCallback: true 
    },
    async (req, username, password, done) => {
      const rows = await pool.query("SELECT * FROM usuario WHERE username = ?", [
        username
      ]);
      if (rows.length > 0) { //si en la base de datos poder traer ese dato y llevarlo a una constante = user
        const user = rows[0];
        const validPassword = await helpers.matchPassword( 
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("success", "Bienvenido" + user.username));
        } else {
          done(null, false, req.flash("success", "Contraseña incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("success", "El nombre de usuario no existe.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",//signin(metodo de registro)
  new LocalStrategy(
    {
      usernameField: "username", //pidiendo en la lista de registro
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {

      let newUser = {
        username,
        password
      };

      newUser.password = await helpers.encryptPassword(password);
      // Saving in the Database
      const result = await pool.query("INSERT INTO usuario SET ? ", newUser);
      newUser.id = result.insertId;
      return done(null, newUser);
    }
  )
);

passport.serializeUser((user, done) => { //sirve para el metodo de registro para q serialize la contraseña 
  done(null, user.id); 
});

passport.deserializeUser(async (id, done) => { //para devolver la contraseña deserializaada por usuario
  const rows = await pool.query("SELECT * FROM usuario WHERE id = ?", [id]);
  done(null, rows[0]);
});
