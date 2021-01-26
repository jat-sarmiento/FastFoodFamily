//librerias que vamos a utilizar
const express = require('express'); //casi siempre el mismo nombre de la libreria ej const express = require('express')
const morgan = require('morgan');
const path = require("path");
const exphbs = require("express-handlebars"); //ej const exphbs = require("express-handlebars")
const bodyParser = require('body-parser');

const app=express() //utilizar todo lo que contiene la libreria xpresss

//archivos compartidos

app.set("port", process.env.PORT || 1234); //configuracion del puerto "cualquier numero de 4cifras"
app.set('views', path.join(__dirname,"views")); //todo va a ser leido en cualquier navegador por el path.join
app.engine(".hbs",exphbs({ //donde iniciamos la configuracion del .hbs
    defaultLayout:"main",
    layoutsDir:path.join(app.get("views"),"layouts"), //leido y compartido a la vez en los navegadores tanto mensajes como navegación
    extname: ".hbs",
}))
app.set('view engine', '.hbs'); //configurar vistas


//middle wars (configuración de eventos)

app.use(morgan("dev")) //va a usar las librerias que la este llamando ej app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:false})); //eventos de librerias sean todos a la vez sincronicos urlencoded(todo el cdigo sera leido en todos los eventos)
app.use(bodyParser.json()); //arreglos json 

//carpeta public

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./router/calculadoraRuta"));
module.exports=app


