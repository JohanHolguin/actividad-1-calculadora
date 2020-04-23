const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Inicializar rutas de los operadores (+ - * /)
const sumRoute = require('./routes/suma.route');
const restRoute = require('./routes/resta.route');
const multRoute = require('./routes/multiplicacion.route');
const divRoute = require('./routes/division.route');

//Creacion de servidor de Express
const app = express();

app.use(bodyParser.json());
//No permitira objetos anidados.
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas de la app
app.use('/api/calcultion', sumRoute);
app.use('/api/calcultion', restRoute);
app.use('/api/calcultion', multRoute);
app.use('/api/calcultion', divRoute);

//Responder a los errores
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

module.exports = app;