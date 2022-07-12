const mongoose = require('mongoose')
//Definimos esquema
var Schema = mongoose.Schema
//Schema es una clase de la librería de mongoose / creamos una instancia de la clase Schema
var EsquemaUsuario = new Schema({
    nombre: String,
    user: String,
    pass: String,
    roles: [String]
})
//Cuando tenemos la instancia de schema, creamos el modelo
var m_usuarios = mongoose.model('m_usuarios', EsquemaUsuario)

module.exports = m_usuarios