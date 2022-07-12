//Login para buscar, por eso utilizamos el modelo
const m_usuarios = require("../modelos/m_usuarios")
//Bctypt lo utilizaremos para desencriptar la contraseña
const bcrypt = require('bcrypt')
//Jwt para crear y desencriptar el token
const jwt = require('jsonwebtoken')


const controladoresLogin = async (req, res)=>{
    //Req para la peticion
    const user = req.body.user
    const pass = req.body.pass
    //conectamos con la base de datos para buscar usuario
    try{
        const usuarioEncontrado = await m_usuarios.findOne({"user":user})
        //si la pass es igual
        //console.log(user, pass)
        console.log( await bcrypt.compare(pass, usuarioEncontrado.pass))

        if(await bcrypt.compare(pass, usuarioEncontrado.pass)){
            //true
            //Si da true es que las pass coinciden
            
            //generar un token
            //sign genera un token
            const token = jwt.sign(
                {
                data:{
                //payload (data) son los datos que queremos meter en el token

                    userID: usuarioEncontrado._id,
                    roles: usuarioEncontrado.roles,
                    user: usuarioEncontrado.user
                }//datos que queremos encriptar
                },
                //SECRETO: 'ivan'
                process.env.SECRETO, //palabra secreta para hacer la encriptación
                { expiresIn: 60 * 60 } //1 hora antes de caducar
            )

            //código 200: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.    
            res.status(200).json({
                token,
                userID: usuarioEncontrado._id,
                user: usuarioEncontrado.user,
                mensaje: "bienvenido"
            })
        }else{
            //error 400: Códigos de error del cliente que indican que hubo un problema con la solicitud.
            res.status(400).json({
                mensaje: 'la contraseña no es correcta'

            })
           
        }    
        
        
        
    }catch(error){
        //error 400: Códigos de error del cliente que indican que hubo un problema con la solicitud.
        res.status(400).json({
            error: error,
            mensaje: 'usuario no encontrado o contraseña invalida'

        })
    }
    

    
}
module.exports = controladoresLogin