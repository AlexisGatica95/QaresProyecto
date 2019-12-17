const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload  = multer({dest : './uploads/'});
const fs = require('fs');
const uuid = require('uuid');
// multer : Destino --> genera un archivo temporal
// Identificamos el archivo, lo copiamos a la carpeta (Leer(temporal) -->(escribir este contenido dentro de la carpeta))
// borramos el archivo temporal
// Insertamos el valor del archivo (nombre) en la tabla

// {nombre_producto, descripcion_producto, foto_producto = uuid, visibilidad_producto, precio_producto, stock_producto}

// producots
// mandamos mensaje : ok
// middleware

// nombre de array, cantidad de elementos que tiene
router.post('/', upload.array('file',2) ,async(req,res,next)=> {

    try {
        // console.log("Entro acá");
        
        console.log(req.files);
        console.log(req.body);
        // leo archivo temporal --> escribo un nuevo archivo (con nuevo nombre dentro de una ubicacion x)
        //let cadena = hola/chau
        // cadena.split('/) --> ['hola','chau']
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
                stringIMG = stringsIMG+','+nombre_imagen+ext;
            } else {
                // 
                errores = 1;
            }
    
        }

        if (errores == 0) {

            let obj = {
                comentario : req.body.comentario,
                cuenta : req.body.cuenta,
                archivo : archivitos
            }
            console.log(obj);

            res.json({status: 'ok', rta: obj});
        }

       

        


        // archivo temporal --> idUnico.jpg
        // en la tabla imagenes idUnico.jpg


        // fs.createReadStream // lee archivo
        // fs.createWriteStream // crea 
        // tmp --> se depositan los archivos temporales
        // public/images --> productos.jpg

        // 

    } catch(error) {
        res.status(500).send();
    }
})


module.exports = router;