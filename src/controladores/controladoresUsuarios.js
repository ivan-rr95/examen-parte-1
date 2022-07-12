const m_usuarios = require("../modelos/m_usuarios")
module.exports = {
    leerUsuarios : async(req,res)=>{
        // todo el codigo de lectura de mongoDB
        try {
            const usuariosEncontrados = await m_usuarios.find()
            res.json(usuariosEncontrados)
            }
            catch (error) {
            res.json({
                mensaje:'se ha producido un error' + error
            })
        }
        
    }
    , 
    leerUsuarioId : async(req,res)=>{
        var id = req.params.id
        // todo el codigo de lectura de mongoDB
        try {
            const usuariosEncontrados = await m_usuarios.findById(id)
            res.json(usuariosEncontrados)
            }
            catch (error) {
            res.json({
                mensaje:'se ha producido un error' + error
            })
        }
        
    }
    , 
    borrarUsuarioId : async (req,res)=>{
        var id = req.params.id
        // todo el codigo de lectura de mongoDB
        try {
            const usuariosEncontrados = await m_usuarios.findByIdAndDelete(id)
            res.json(usuariosEncontrados)
            }
            catch (error) {
            res.json({
                mensaje:'se ha producido un error' + error
            })
        }
    }  
}