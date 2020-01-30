const pool = require('../DB');

async function getpubli(id_usr) {
    try {
        console.log('entro al model');
        let query = 'select titulo_p, texto_p, edad_p, telefono_p, img_p from ?? where activa=1 and id_usr = ?';
        const rows = await pool.query(query, ['publicaciones',id_usr]);
        
        console.log(rows);
        return rows;
    }
    catch (error) {
        console.log('salio por el model');
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


module.exports ={getpubli,updatePubli,deletePubli}