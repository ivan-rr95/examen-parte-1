//Cargamos el modelo (schema) de m_usuarios
const m_usuarios = require('../modelos/m_usuarios')
//Bcrypt para encriptar la pass, para que quede guardada en la base de datos
const bcypt = require('bcrypt')

const controladoresRegistro = async (req, res)=>{
    //encriptamos la pass
    //Bcrypt.hash para coger la pass y encriptarla y lo hacemos 10 veces
    const contraseñaEncriptada = await bcypt.hash(req.body.pass, 10)
    //instancia del modelo: instancia es un objeto apartir de una clase
    const usuario = new m_usuarios({
            user : req.body.user,
            pass : contraseñaEncriptada,
            roles: ['registrado']
    }) 
    try{
        const usuarioGuardado = await usuario.save()
        //código 200: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor. 
        res.status(200).json({
            user: usuarioGuardado,
            mensaje: 'Usuario guardado - nuevo usuario'
    })
    }catch(error){
        //error 400: Códigos de error del cliente que indican que hubo un problema con la solicitud.
        res.status(400).json({
            error: error,
            mensaje: 'Error al registrar el usuario'
    })
}
}

module.exports = controladoresRegistro