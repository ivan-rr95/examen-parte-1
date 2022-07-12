//Express para sacar las rutas
const express = require('express')
//Morgan para que cuando salga la petición la muestre en el terminal
const morgan = require('morgan')
// cargamos la librería de multer
const multer = require('multer')
//Cors para evitar la censura o bloque de los navegadores para cuando hacemos una petición de un servidor a otro 
var cors = require('cors')
//fs-extra: libreria para subir, borrar, etc archivos
const fs = require('fs-extra') // this is no longer necessary   
//Dotenv -- nueva libreria
const dotenv = require('dotenv')
// const enrutador = express.Router()
const app = express()
app.use(cors())
dotenv.config()


//rutas
const rutaUsuarios = require('./src/rutas/rutaUsuarios')
const rutaMascotas = require('./src/rutas/rutaMascotas')
const rutaRegistro = require('./src/rutas/rutaRegistro')
const rutaLogin = require('./src/rutas/rutaLogin')
const rutaUpload = require('./src/rutas/rutaUpload')

//Conectamos con la base de datos de MongoDB
const db = require('./src/database')
//Detectamos el evento error cuando hay un problema
db.on('error', (error)=>{
    console.log('Error en la conexión de la base de datos' + error);
})
//Detectamos el evento connected cuando todo está ok
db.on('connected', ()=>{
    console.log('La base de datos está conectada');
})


app.use(morgan('combined'))
//Middleware para la codificación json del cuerpo de las peticiones (body)
app.use(express.json());
//Middelware para parsear los archivos JSON
app.use(express.urlencoded({ extended: false }));

//rutas
//Creamos (enrutador) middleware
app.use('/api/usuarios', rutaUsuarios)
app.use('/api/mascotas', rutaMascotas)
app.use('/api/registro', rutaRegistro)
app.use('/api/login', rutaLogin)
app.use('/api/upload', rutaUpload)





//Mandamos a la raíz / ruta general
app.get('/', (req,res)=>{
    res.send('Estas en la ruta raiz del examen')
})
//Levantamos el servidor
app.listen(process.env.PORT, ()=>{
    console.log('Servidor escuchando en el puerto 8000')
})