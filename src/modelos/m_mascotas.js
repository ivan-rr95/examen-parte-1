const mongoose = require('mongoose')
//Definimos esquema
var Schema = mongoose.Schema
//Schema es una clase de la librería de mongoose / creamos una instancia de la clase Schema
var EsquemaMascotas = new Schema({
    nombre: String,
    descripcion: String
})
//Cuando tenemos la instancia de schema, creamos el modelo
var m_mascotas = mongoose.model('m_mascotas', EsquemaMascotas)

module.exports = m_mascotas