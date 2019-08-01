require('./config/config.js');

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// configuracion de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// conexion a base de datos
mongoose.connect('mongodb://localhost:27017/DB_SSTEC', (err, res) => {

    if (err) throw err;

    console.log('Base de datos ONLINE');

});

// importando configuraciones de rutas
var userRoutes = require('./routes/usuario-routes');
var productRoutes = require('./routes/product-routes');

// Rutas 
app.use('/usuario', userRoutes);
app.use('/product',productRoutes);

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});