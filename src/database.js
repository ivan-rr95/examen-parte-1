//Importar moongose
const mongoose = require('mongoose')
//const { leerUsuarios } = require('./controladores/controladoresUsuarios')
//const { leerPartidas } = require('./controladores/controladoresPartidas')

//Código de conexion con la base de datos mongodb


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z59gy.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

//Creamos la conexión
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

//Creamos un objeto llamado db que contiene la conexión a la base de datos
var db = mongoose.connection;
//Exportamos la conexión
module.exports = db