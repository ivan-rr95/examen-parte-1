//rutaMascotas

//dependencias de node
const express = require('express')

//Enrutador
const rutaMascotas = express.Router()
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')
const {leerMascotas, leerMascotasId, crearMascotas, modificarMascotasId, borrarMascotasId} = require('../controladores/controladoresMascotas')

//get sirve para extraer datos de la base de datos
rutaMascotas.get('/', auth, rol(['admin','registrado']), leerMascotas) //auth
rutaMascotas.get('/:id', auth, rol(['admin']), leerMascotasId)

//post sirve para escribir dentro de la base de datos
rutaMascotas.post('/', auth, rol(['admin','registrado']), crearMascotas)
rutaMascotas.put('/:id', auth, rol(['admin','registrado']), modificarMascotasId)
rutaMascotas.delete('/:id', auth, rol(['admin','registrado']), borrarMascotasId)


module.exports = rutaMascotas