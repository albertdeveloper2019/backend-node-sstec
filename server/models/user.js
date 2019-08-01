var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    telefono: { type: String, required: [true, 'El telefono es necesario'] },
    email: { type:String, unique:true , required: [true, 'El email es necesario'] },
    password: { type: String, required: [true, 'La contraseña es necesaria'] }
});

userSchema.plugin(uniqueValidator, { message: 'El correo ya existe'});
module.exports = mongoose.model('User', userSchema);