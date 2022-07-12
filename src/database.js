//Importar moongose
const mongoose = require('mongoose')
//const { leerUsuarios } = require('./controladores/controladoresUsuarios')
//const { leerPartidas } = require('./controladores/controladoresPartidas')

//Código de conexion con la base de datos mongodb

const BD_NAME = 'bd_examen'
const BD_USER = 'deltoya'
const BD_PASSWORD = 'ejemplo_123' 
const uri = `mongodb+srv://${BD_USER}:${BD_PASSWORD}@cluster0.z59gy.mongodb.net/${BD_NAME}?retryWrites=true&w=majority`

//Creamos la conexión
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//Creamos un objeto llamado db que contiene la conexión a la base de datos
var db = mongoose.connection;
//Exportamos la conexión
module.exports = db