const express = require('express');
const router = express.Router();

const md5 = require('md5');

const usuariosModel = require('../models/usuariosModel');

router.get('/:id', async(req,res,next)=> {
    try {
        console.log('entro al controller');
        let usr_data = await usuariosModel.getUsuario(req.params.id);
        res.json({status : 'ok', data : usr_data});
    } catch (error) {
        console.log('salio por el controller');
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})


router.put('/update/:id', async(req,res,next)=> {
    try {
        let obj = {
            nombre_usuario : req.body.nombre,
            apellido_usuario : req.body.apellido,
            telefono_usuario : req.body.telefono,
            mail_usuario : req.body.mail
        }
        let updateuser = await usuariosModel.updateUsuario(req.params.id,obj);
        if (updateuser > 0 ) {
         res.json({status : 'ok'})   
        } else {
        res.status(500).json({status : 'error'})
        }
        
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'})
    }
})

router.put('/updatePassword/:id', async(req,res,next)=> {
    try {
        let obj =
        {
            nuevapassword : md5(req.body.passwordnueva),
            viejapassword : md5(req.body.passwordvieja)
        };
         
        

        let updatePass = await usuariosModel.updatePass(req.params.id,obj);
        if(updatePass > 0) {
         res.json({status : 'ok'}) } 
         else{
            res.status(500).json({status : 'error'}) 
         }

        
        
    } catch(error) {
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})




module.exports = router;