//dependencias de node
const express = require('express')
//Cargamos librería multer
const multer = require('multer')
//fs-extra: libreria para subir, borrar, etc archivos
const fs = require('fs-extra') 

module.exports = {
    añadiravatar: (req, res)=>{
        try {
            res.json({
                mensaje: 'Foto subida',
                nombreArchivo: req.file.originalname
            })
        } catch (error) {
            res.json({
                mensaje: 'error', error
            })
        }
    }
    ,
    borraravatar: async (req, res)=>{
        try {
            const file = req.params.file
            await fs.remove('avatares/' + files)
            res.json({
            mensaje: 'OK'+file+' ha sido borrado',
            
        })
        } catch (error) {
            res.json({
                mensaje: 'error', error
            })
        }
      }
}
