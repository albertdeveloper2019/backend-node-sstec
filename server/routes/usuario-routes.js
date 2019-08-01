var express = require('express');
var app = express();
var Usuario = require('../models/user');

// peticion get obtener usuario
app.get('/', (req, res, next) => {

    Usuario.find({})
        .exec(
            (err, User) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando usuario',
                        errors: err
                    });

                } res.status(200).json({
                    ok: true,
                    usuarios: User
                });

            });

});

// peticion post obtener usuarios
app.post('/', (req, res) => {
    var body = req.body;
    console.log(body);
    
    var user = new Usuario({
        nombre: body.nombre,  
        telefono: body.telefono,      
        email: body.email,
        password: body.password,
       
    });

    user.save((err, usuarioGuardado) => {
        if (err) {
            return res.status(400).json({
                mensaje: 'Error al crear usuario',
                errors: err
            });
        }
     
        res.status(201).json({
            ok: true,
            mensaje: ' Usuario ' + usuarioGuardado.nombre + ' registrado.',
            usuario: usuarioGuardado,
        });

    });

});

module.exports = app;