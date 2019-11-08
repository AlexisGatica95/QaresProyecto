const pool = require('../DB');
const md5 = require('md5');

async function getUsuario(id) {
    try {
        console.log('entro al model');
        let query = "select nombre_usuario, apellido_usuario, telefono_usuario, mail_usuario from ?? where id_usuario = ?";
        const rows = await pool.query(query,["usuarios",id]);
        return rows; 
    } catch (error) {
        console.log('salio por el model');
        throw error;
    }
}

async function updateUsuario(id,obj) {
    try {
        console.log('entro al model del update');
        let query = 'update ?? set ? where id_usuario = ?';
        const rows = await pool.query(query,['usuarios',obj,id]);
        console.log(rows);
        return rows.affectedRows;
        
    } catch (error) {
        console.log('salio por el model del update');
        throw error;
    }
}

async function updatePass(id,obj) {
    try{ 
        let checkq =  'select password_usuario from ?? where id_usuario = ?';
        const checkr = await pool.query(checkq,['usuarios',id]);
        let passwordActual = checkr[0].password_usuario;

        if (passwordActual == obj.viejapassword ) {
            let query = "update ?? set password_usuario = ? where id_usuario = ?";
            const rows = await pool.query(query,['usuarios',obj.nuevapassword,id])
            return rows.affectedRows;
        } else {
            console.log('las contraseñas no coinciden');
            
}
        

    } catch(error) {
        throw error;
    }
}

module.exports = {getUsuario,updateUsuario,updatePass}