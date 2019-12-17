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

async function prov(){
    try {
        let query ='select id_c, nombre from ?? where activa = 1';
        const rows = await pool.query(query,['ciudades']);
        return rows;

    } catch (error) {
        throw error;
    }
}

async function updatePubli(obj,id){
    try {
        console.log('entro al model');
        let query =  'update ?? set ? where id_publi = ?';

        let rows = await pool.query(query,['publicaciones',obj,id]);
        
        if (rows.affectedRows == 1) {
            return true;
            }

    } catch (error) {
        console.log('salio por el model');
        throw error; 
    }
}

async function deletePubli(id){
    try {
        console.log('entro al model');
        let query = 'delete from ?? where id_publi = ?'

        let rows = await pool.query(query,['publicaciones',id]);

        return rows;

    } catch (error) {

        console.log('salio por el model');
        throw error; 
        
    }
}




module.exports = {publicacion,updatePubli,deletePubli,confirmarPubli,check,prov}