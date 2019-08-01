var uniqueValidator = require('mongoose-unique-validator');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    codigo: { type: String, unique:true, required: [true, 'El codigo es necesario'] },
    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    ubicacion: { type: String, required: [true, 'El ubicacion es necesario'] },
    valor: { type: Number, required: [true, 'El valor es necesario'] },
    cantidad: { type: Number, required: [true, 'El cantidad es necesario'] },
    Fecha_Registro: { type: String, required: [true, 'La Fecha_Registro es necesaria'] }
});

productSchema.plugin(uniqueValidator, { message: 'El codigo ya existe'});
module.exports = mongoose.model('Product', productSchema);