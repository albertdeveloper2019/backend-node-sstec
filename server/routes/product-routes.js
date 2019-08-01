var express = require('express');
var app = express();
var Product = require('../models/product');

// peticion get obtener productos
app.get('/', (req, res, next) => {

    Product.find({})
        .exec(
            (err, producto) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando el producto',
                        errors: err
                    });

                } res.status(200).json({
                    ok: true,
                    Product: producto
                });

            });

});

// peticion post registar productos
app.post('/', (req, res) => {
    var body = req.body;
    console.log(body);
    
    var product = new Product({
        codigo: body.codigo,
        nombre: body.nombre,        
        ubicacion: body.ubicacion,
        valor: body.valor,
        cantidad: body.cantidad,
        Fecha_Registro: body.Fecha_Registro
       
    });

    product.save((err, productoGuardado) => {
        if (err) {
            return res.status(400).json({
                mensaje: 'Error al crear producto',
                errors: err
            });
        }
     
        res.status(201).json({
            ok: true,
            mensaje: ' Producto ' + productoGuardado.nombre + ' registrado.',
            usuario: productoGuardado,
        });

    });

});

module.exports = app;