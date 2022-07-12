const m_mascotas = require("../modelos/m_mascotas")
module.exports = {
    leerMascotas : async(req,res)=>{
        try {
            // todo el codigo de lectura de mongoDB
            const mascotasEncontradas = await m_mascotas.find()
            res.json(mascotasEncontradas)
            }
            catch (error) {
            res.json({
                mensaje:'se ha producido un error' + error
            })
        }
        
    }
    , 
    leerMascotasId : async(req,res)=>{
        var id = req.params.id
        // todo el codigo de lectura de mongoDB
        try {
            const mascotasEncontradas = await m_mascotas.findById(id)
            res.json(mascotasEncontradas)
            }
            catch (error) {
            res.json({
                mensaje:'se ha producido un error' + error
            })
        }
        
    }
    , 
    crearMascotas: async (req,res)=>{
        const mascotas = new m_mascotas({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion
        })
        try{
            const mascotasGuardada = await mascotas.save()
            res.json({
                error: null,
                data: mascotasGuardada
            })
        }catch (error){
            res.status(400),json({error})
        }
    }
    ,
    modificarMascotasId : async (req,res)=>{
        //Creamos el objeto usando el modelo que creamos anteriormente
        const id = req.params.id 
        
        try{
            const mascotasModificada = await m_mascotas.findByIdAndUpdate(id,{
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            })
            res.json({
                error: null,
                data: mascotasModificada
            })
        }catch (error) {
            res.status(400).json({error})
        }
    }
    , 
    borrarMascotasId : async (req,res)=>{
        var id = req.params.id
        // todo el codigo de lectura de mongoDB
        try {
            const mascotasEncontradas = await m_mascotas.findByIdAndDelete(id)
            res.json(mascotasEncontradas)
            }
            catch (error) {
            res.json({
                mensaje:'se ha producido un error' + error
            })
        }
    }  
}