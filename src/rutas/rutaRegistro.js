//rutaRegistro

//dependencias de node
const express = require('express')

//Enrutador
const rutaRegistro = express.Router()
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')

//cargamos controladores
const controladoresRegistro = require('../controladores/controladoresRegistro')

//Ruta principal
rutaRegistro.post('/', controladoresRegistro)

//exportar
module.exports = rutaRegistro