const jwt = require('jsonwebtoken')
const m_usuarios = require('../modelos/m_usuarios')
const m_mascotas = require('../modelos/m_mascotas')

const auth = async (req, res, next)=>{
    //capturamos el token que envia en la cabecera
    if(req.headers.authorization){
        var token = req.headers.authorization.split(' ')[1]
        try{
            const tokenVerificado = jwt.verify(token, process.env.SECRETO) 
            console.log(tokenVerificado.data.userID)
    
            //buscamos en base de datos al usuario con su id
            const usuarioEncontrado = await m_usuarios.findById(tokenVerificado.data.userID)
            const mascotaEncontrada = await m_mascotas.findById(tokenVerificado.data.userID)
            // console.log(usuarioEncontrado)
            req.query.userID = tokenVerificado.data.userID
            req.query.roles = tokenVerificado.data.roles

            //pasamos al siguiente middleware, en este caso el controlador
            next()
        }catch(error){
            //error 500: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.
            res.status(500).json({
                error: error,
                mensaje: 'El token no es valido'
            })
        }
    }else{
        //error 400: Códigos de error del cliente que indican que hubo un problema con la solicitud.
        res.status(400).json({
            mensaje: 'No tienes permiso'
        })
    }
    //desencriptamos el token
    
    console.log('estas en el middleware de auth', token)
}

module.exports = auth