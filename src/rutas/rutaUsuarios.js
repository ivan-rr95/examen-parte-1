//rutaUsuarios

const express = require('express')
//const multipart = require("connect-multiparty")
const rutaUsuarios = express.Router()

const {leerUsuarios, leerUsuarioId, borrarUsuarioId} = require('../controladores/controladoresUsuarios')

//Middlewares
const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')
//const avatar = multipart({ uploadDir: '../avatares' })

//Leer todos los usuarios
rutaUsuarios.get('/', auth, rol(['admin','registrado']), leerUsuarios)
//Leer un usuario con un ID determinado
rutaUsuarios.get('/:id', auth, rol(['admin']), leerUsuarioId)
//Borrar un usuario con ID
rutaUsuarios.delete('/:id', auth, rol(['admin','registrado']), borrarUsuarioId)


module.exports = rutaUsuarios