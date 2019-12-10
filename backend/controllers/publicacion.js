const express = require('express');
const router = express.Router();

const uuid = require('uuid');

const publicacionModel = require('../models/publicacionModel');


router.post('/:id', async(req,res,next)=> {
    try {
        console.log('entro al controller'); 
        let obj = {
        titulo : req.body.titulo,
        texto : req.body.texto,
        edad : req.body.edad,
        telefono : req.body.telefono,
        mail : req.body.mail,
        wsp : req.body.wsp,
        id_mail_p: uuid(),
        id_usr : req.params.id
    }
    let publican2 = await publicacionModel.publicacion(obj);
    if (publican2){ 
        res.json({status:'ok', message : 'se subio tu publicacion'});
    }    
    } catch (error) {
        console.log('salio por el controller');
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

router.put('/updatePubli/:id', async (req,res,next)=> {
    try {
        let obj = {
            titulo : req.body.titulo,
            texto : req.body.texto,
            edad : req.body.edad,
            telefono : req.body.telefono,
            mail : req.body.mail,
            wsp : req.body.wsp
        }
        const id = req.params.id;

        let update = await publicacionModel.updatePubli(obj,id);

        if(update){
            res.json({status:'ok', message : 'publicacion editada correctamente'});
        }

    } catch (error) {
        console.log('salio por el controller');
        console.log(error);
        res.status(500).json({status : 'error'});
        
    }
})

router.delete('/deletePubli/:id', async (req,res,next) => {
    try {

        const id = req.params.id;

        let deletePubli = await publicacionModel.deletePubli(id);

        if (deletePubli) {
            res.json({status : 'ok' , message : 'la publicacion se borro bby'})
        }
        
    } catch (error) {
        
    }
})

router.get('/confirmar/:codigoPubli', async (req,res,next) => {
    
    try {
        let codigo = req.params.codigoPubli;
        let confirmacion =await publicacionModel.confirmarPubli(codigo);
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

router.get('/:id' , async (req,res,next)=> {
    try {
        
        let chequeo = await publicacionModel.check(id);


        if (chequeo==false){
            res.json({status:'no puede', message :'ya hay una publicacion activa'})
        } else {
            res.json({status:'puede'});
    }
           
    } catch (error) {
        console.log(error);

        res.status(500).json({status:'error'});    
    }
})




module.exports = router; 