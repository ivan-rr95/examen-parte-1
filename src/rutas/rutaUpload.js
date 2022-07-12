//rutaUpload

//dependencias de node
const express = require('express')
//Cargamos librería multer
const multer = require('multer')
//fs-extra: libreria para subir, borrar, etc archivos
const fs = require('fs-extra') // this is no longer necessary 

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'avatares/')
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.')[1])
    }
})

//Creamos el objeto multer con la ubicación y nombre (storage)
var upload = multer({ storage : storage})

//cargamos controladores
const { añadiravatar, borraravatar } = require('../controladores/controladoresUpload')

//Enrutador
const rutaUpload = express.Router()
//const auth = require('../middlewares/auth')
const rol = require('../middlewares/rol')


//Ruta principal
rutaUpload.post('/files', upload.single('file'), añadiravatar)
rutaUpload.delete('/files/:files', borraravatar)


//exportar
module.exports = rutaUpload