//librerias que vamos a utilizar
const express = require('express'); //casi siempre el mismo nombre de la libreria ej const express = require('express')
const morgan = require('morgan');
const path = require("path");
const exphbs = require("express-handlebars"); //ej const exphbs = require("express-handlebars")
const session= require("express-session");
const passport = require('passport');
const flash = require("connect-flash");
const MySQLStore = require('express-mysql-session');
const bodyParser = require('body-parser');

// llamar la base de datos

const{database}=require("./keys");
const { restart } = require('nodemon');
const app=express()
require("./lib/passport")

//archivos compartidos

app.set("port", process.env.PORT || 8852);
app.set('views', path.join(__dirname,"views")); //todo va a ser leido en cualquier navegador por el path.join
app.engine(".hbs",exphbs({
    defaultLayout:"main",
    layoutsDir:path.join(app.get("views"),"layouts"), //leido y compartido a la vez en los navegadores tanto mensajes como navegación
    partialsDir:path.join(app.get("views"),"partials"),
    extname: ".hbs",
    helpers: require("./lib/helpers")
}))
app.set('view engine', '.hbs'); //configurar vistas


//middle wars

app.use(morgan("dev")) //va a usar las librerias que la este llamando ej app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(session({
    secret: "fastff",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//variables globales 

app.use((req,res,next)=>{
    app.locals.menssage=req.flash("mensaje")
    app.locals.success=req.flash("success")
    app.locals.user=req.user
    next()
});

//carpeta public

app.use(express.static(path.join(__dirname, "public")));

app.use(require("./router/index.router"))
app.use(require("./router/auth.router"))
app.use(require("./router/user.router"))
module.exports=app

