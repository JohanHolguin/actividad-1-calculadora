const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Inicializar las rutas
const sumRoute = require('./routes/sum.route');
const restRoute = require('./routes/rest.route');
const multRoute = require('./routes/mult.route');
const divRoute = require('./routes/div.route');

//Crear servidor de Express
const app = express();

//Indicarle a Express que use json
app.use(bodyParser.json());
//No permitira objetos anidados
app.use(bodyParser.urlencoded({ extended: true }));

//Indicarle a Express cuales son las rutas de la app
app.use('/api/calcultion', sumRoute);
app.use('/api/calcultion', restRoute);
app.use('/api/calcultion', multRoute);
app.use('/api/calcultion', divRoute);

//Indicando cómo responder a los errores
app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

module.exports = app;