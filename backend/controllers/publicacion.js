const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload  = multer({dest : './public/uploads/'});
const fs = require('fs');

const uuid = require('uuid');

const publicacionModel = require('../models/publicacionModel');
const getpubliModel = require('../models/getpubliModel');

//ALREADY USED
//el usuario postea su publcacion 

router.post('/:id',upload.array('file',4), async(req,res,next)=>{
    try {
        // empiezo sin errores
        let errores = 0;
        // creo las variables que voy a usar dentro del loop (nombre de la imagen, extension de la imagen, y stringimgs que es un string al que le voy metiendo cada archivo con una "," adelante asi lo guardo en la base de datos, y despues cuando los recupero hago un split con "," y ya tengo un array de las imagenes)
        let nombre_imagen = "";
        let ext = "";
        let stringIMG = "";

        // agarro el array de archivos y por cada uno..
        for (i = 0; i < req.files.length; i++) {
            // le creo nombre unico
            nombre_imagen = uuid();
            // chequeo si es jpeg o png, si quiero aceptar otros formatos tengo que modificar esto
            if(req.files[i].mimetype == 'image/jpeg' || req.files[i].mimetype == 'image/png') {
                // escribo la extension que corresponda
                ext = req.files[i].mimetype.split('/'); // [image,jpeg]
                ext = "."+ext[1];
                // la subo a donde quiero, y borro el archivo temporal
                fs.createReadStream('./public/uploads/'+req.files[i].filename).pipe(fs.createWriteStream('./public/uploads/'+nombre_imagen+ext))
                fs.unlink('./public/uploads/'+req.files[i].filename,(err) => {
                    if(err) {
                        console.log(error);
                    }
                })
                // la agrego a la string de imagenes que ya procese
                stringIMG = stringIMG+nombre_imagen+ext+',';
               
            } else {
                // si algo sale mal me aviso que hubo errores
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
                res.json({status:'ok', message : 'se envio tu publicacion, chequea tu mail para confirmar.'});
            }    
        }   
    } 
    catch (error) {
        console.log('salio por el controller');
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})


router.post('/:id', upload.array('file',2), async(req,res,next)=> {
    try {
        console.log(req.files);
        console.log(req.body);
        let errores = 0;
        let archivitos = [];
        var i;
        let nombre_imagen = "";
        let ext = "";
        let stringIMG = "";
        if (req.files != undefined) {
            for (i = 0; i < req.files.length; i++) {
                nombre_imagen = uuid();
                if(req.files[i].mimetype == 'image/jpeg' || req.files[i].mimetype == 'image/png') {
                        ext = req.files[i].mimetype.split('/'); // [image,jpeg]
                        ext = "."+ext[1];
                        fs.createReadStream('./public/uploads/'+req.files[i].filename).pipe(fs.createWriteStream('./public/uploads/'+nombre_imagen+ext))
                        fs.unlink('./public/uploads/'+req.files[i].filename,(err) => {
                            if(err) {
                                console.log(err);
                            }
                        })
                        archivitos[i] = nombre_imagen+ext;
                        stringIMG = stringIMG+nombre_imagen+ext+',';
                } else {
                    errores = 1;
                }
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
                res.json({status:'ok', message : 'se envio tu publicacion, chequea tu mail para confirmar.'});
            }    
        }   
    } 
    catch (error) {
        console.log('salio por el controller');
        console.log(error);
        res.status(500).json({status : 'error'});
    }
})

//Updatea una publi
router.put('/updatePubli/:id_publi', async (req,res,next)=> {
    try {
        let obj = {
            titulo_p : req.body.titulo,
            texto_p : req.body.texto,
            edad_p : req.body.edad,
            telefono_p : req.body.telefono,
            mail_p : req.body.mail,
            wsp_p : req.body.wsp,
            img_p : req.body.img
        }
        const id = req.params.id;
        let update = await publicacionModel.updatePubli(obj,id_publi);
        if(update){
            res.json({status:'ok', message : 'publicacion editada correctamente'});
        }
    } catch (error) {
        console.log('salio por el controller');
        console.log(error);
        res.status(500).json({status : 'error'});
        
    }
})

//Borra una publi
router.delete('/deletePubli/:id_publi', async (req,res,next) => {
    try {
        const id_publi = req.params.id_publi;
        let deletePubli = await publicacionModel.deletePubli(id_publi);
        if (deletePubli) {
            res.json({status : 'ok' , message : 'la publicacion se borro bby'})
        }
   } catch (error) {
    }
})

//trae una publi por su ID de usuario
router.get('/getpubli/:id_usr',async(req,res,next)=>{
    try {
        console.log('entro al controler de get publi')
        // let id_publi = req.params.id_publi;
        let id_usr = req.params.id_usr;
        let getpublis = await getpubliModel.getpubli(id_usr)
        console.log('estas son las publsi : '+getpublis);
        res.json({status: 'ok', getpublis : getpublis});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:'error'});
        throw error;
    }
})

//ALREADY USED
//confirma la publicacion del usuario y pasa de activa=0 a activa=1
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
    }
    catch (error) {
        console.log(error);
        res.status(500).json({status:'error'});
    }
})

//trae una publi por su ID de usuario
router.get('/getpubli/:id_usr',async(req,res,next)=>{
    try {
        console.log('entro al controler de get publi')
        // let id_publi = req.params.id_publi;
        let id_usr = req.params.id_usr;
        let getpublis = await getpubliModel.getpubli(id_usr)
        console.log('estas son las publsi : '+getpublis);
        res.json({status: 'ok', getpublis : getpublis});
    } catch (error) {
        console.log(error);
        res.status(500).json({status:'error'});
        throw error;
    }
})

//ALREADY USED
//trae el objeto de provicias
router.get('/provincias', async (req,res,next)=> {
    try {
        let traerprov = await publicacionModel.prov();
         res.json({status : 'ok', provincias : traerprov });

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({status:'error'});
        throw error;
    }
})

//ALREADY USED
//trae todas las publis para mostrarlas en el home
router.get('/allpublis', async(req,res,next)=> {
    try {
        let allpublis = await publicacionModel.getallpublis();
        console.log('entro al controller');
        res.json({status: 'ok', allpublis : allpublis});
    } 
    catch (error) {
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
        } 
        else {
            res.json({status:'puede'});
        }      
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({status:'error'});    
    }
})

module.exports = router; 