const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload  = multer({dest : './uploads/'});
const fs = require('fs');

const uuid = require('uuid');

const publicacionModel = require('../models/publicacionModel');


router.post('/:id', upload.array('file',2), async(req,res,next)=> {
    try {
        console.log(req.files);
        console.log(req.body);
        
        let errores = 0;
        let archivitos = [];
        var i;
        let nombre_imagen = "";
        let ext = "";
        let stringIMG = '';

        for (i = 0; i < req.files.length; i++) {
            nombre_imagen = uuid();
            if(req.files[i].mimetype == 'image/jpeg' || req.files[i].mimetype == 'image/png') {
                ext = req.files[i].mimetype.split('/'); // [image,jpeg]
                ext = "."+ext[1];
                fs.createReadStream('./uploads/'+req.files[i].filename).pipe(fs.createWriteStream('./uploads/'+nombre_imagen+ext))
                fs.unlink('./uploads/'+req.files[i].filename,(err) => {
                    if(err) {
                        console.log(err);
                    }
                })
                archivitos[i] = nombre_imagen+ext;
                stringIMG = stringIMG+','+nombre_imagen+ext;
            } else {
                // 
                errores = 1;
            }
    
        }

        if (errores ==0) {
            console.log('entro al controller'); 
            let obj = {
                titulo_p : req.body.titulo,
                texto_p : req.body.texto,
                edad_p : req.body.edad,
                telefono_p : req.body.telefono,
                mail_p : req.body.mail,
                wsp_p : req.body.wsp,
                id_mail_p: uuid(),
                id_usr : req.params.id,
                img_p : stringIMG
            }
            let publican2 = await publicacionModel.publicacion(obj);
            console.log(obj);
            if (publican2){ 
                res.json({status:'ok', message : 'se subio tu publicacion'});
            }    
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
            titulo_p : req.body.titulo,
            texto_p : req.body.texto,
            edad_p : req.body.edad,
            telefono_p : req.body.telefono,
            mail_p : req.body.mail,
            wsp_p : req.body.wsp
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

router.get('/provincias', async (req,res,next)=> {
    try {
        let traerprov = await publicacionModel.prov();

       res.json({status : 'ok', provincias : traerprov });

    } catch (error) {
        console.log(error);
        res.status(500).json({status:'error'});
        throw error;
    }
})

router.get('/allpublis', async(req,res,next)=> {
    try {
        let allpublis = await publicacionModel.getallpublis();

        console.log('entro al controller');

        res.json({status: 'ok', allpublis : allpublis});

        

    } catch (error) {
        
        console.log(error);
        res.status(500).json({status:'error'});
        throw error;
    }
})

router.get('/:id' , async (req,res,next)=> {
    try {
        
        let chequeo = await publicacionModel.check(req.params.id);


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