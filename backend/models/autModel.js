const pool = require('../DB');

async function loginUser(username,password) {
    try{
        let query = "select id_usuario, nombre_usuario, permisos_usuario from ?? where mail_usuario = ? and password_usuario = ? ";
        const rows = await pool.query(query,['usuarios',username,password]);

        return rows;
        
    } catch(error) {
        throw error;
    }
}


module.exports = {loginUser}