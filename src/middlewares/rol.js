const rol = (arrayRoles)=>{
    console.log('arrayroles: ', arrayRoles)
    return(
        (req,res,next)=>{
            console.log('roles de req.query.roles: ', req.query.roles)
            var permiso = false
            //recorremos roles de usuario
            req.query.roles.forEach(rol =>{
                //si uno de estos roles está dentro de los roles del endpoint
                if(arrayRoles.includes(rol)){
                    console.log('tiene permisos')
                    permiso = true
                }
                //si ha encontrado un rol con permiso pasa a controladoresUsuarios con el next()
                if(permiso){
                    next()
                }
                else{
                    //error 400: Códigos de error del cliente que indican que hubo un problema con la solicitud.
                    res.status(400).json({
                        mensaje: 'No tienes el rol necesario'
                    })
                }
            })
            
        }
    )
}

module.exports = rol