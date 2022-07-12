//rutaLogin

//dependencias de node
const express = require('express')

//Enrutador
const rutaLogin = express.Router()
//const auth = require('../middlewares/auth')
//const rol = require('../middlewares/rol')

//cargamos controladores
const controladoresLogin = require('../controladores/controladoresLogin')

//Ruta principal
rutaLogin.post('/', controladoresLogin)

//exportar
module.exports = rutaLogin