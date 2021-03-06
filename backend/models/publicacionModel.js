const pool = require('../DB');
const correosModel = require('./correosModel');

async function publicacion(obj) {
    try {
        console.log('entro al model');
        let query = 'insert into ?? set ?';
        const rows = await pool.query(query,['publicaciones',obj]);
  
        if(rows.insertId !=undefined) {
            let id_correo = await correosModel.MailConfirmarPubli(obj);
            if(id_correo) {
                return true;
            } else {
                return false; 
            }
        } 
    } catch (error) {
        throw error; 
    }
}

async function confirmarPubli(codigo){
    try {
        let query ='update ?? set activa = 1 where id_mail_p = ?';
        const rows = await pool.query(query,['publicaciones',codigo]);
        if(rows.affectedRows > 0){
            return true;
        }
    } catch (error) {
        throw error;
    }
}

async function check(id){
    try {
        let query ='select id_publi from ? where id_usr = ? and activa = 1';
        const rows = await pool.query(query,['publicaciones',id]);
        if (rows.length > 0){
            return false;
        } else {
            return true;
        }
    } catch (error) {
        throw error;
    }
}

async function getallpublis(){
    console.log('entro por el model');
    let query='select titulo_p, texto_p, edad_p, telefono_p, img_p from ?? where activa=1';
    const rows = await pool.query(query,['publicaciones']);
    console.log(rows);
    return rows;
}

async function prov(){
    try {
        let query ='select id_c, nombre from ?? where activa = 1';
        const rows = await pool.query(query,['ciudades']);
        return rows;

    } catch (error) {
        throw error;
    }
}


module.exports = {publicacion,confirmarPubli,check,prov,getallpublis}