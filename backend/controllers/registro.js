const express = require('express');
const router = express.Router();

const registroModel = require('../models/registroModel');

//  Registro de usuario

const uuid = require('uuid');
const md5 = require('md5');

router.post('/', async(req,res,next) => {
    try {
        let obj = {
           
            nombre_usuario : req.body.nombre,
            apellido_usuario : req.body.apellido,
            mail_usuario : req.body.mail,
            // telefono_usuario : req.body.telefono,
            codigo_mail_usuario : uuid(),
            password_usuario : md5(req.body.password)
        }
        console.log(obj);
        let registro_ok = await registroModel.registrar(obj);
        if(registro_ok) {
            res.json({status : 'ok', message : 'Se envio un correo a tu cuenta de mail'})
        } else {
            res.status(500).json({status:"error"});

        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({status:"error"});
    }
})

router.get('/confirmar/:codigomail', async(req,res,next) => {
    try {
        let codigo = req.params.codigomail;
        let confirmacion =await registroModel.confirmarUser(codigo);
        console.log("confirmacion: "+confirmacion);
        if (confirmacion){
            res.json({status:'ok'})
        } else {
            res.status(500).json({status:'error'});
    }
        
    } catch (error) {
        console.log(error);

        res.status(500).json({status:'error'});
    }
})

module.exports  = router; 
