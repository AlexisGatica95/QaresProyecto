const pool = require('../DB');
const correosModel = require('./correosModel');

async function registrar(obj){
    try {
        let query = "insert into ?? set ?";
        const rows = await pool.query(query,['usuarios',obj]);

        if(rows.insertId !=undefined) {
            let id_correo = await correosModel.sendGenericEmail(obj);
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


async function confirmarUser(codigo){
    try {
        let query = 'update ?? set cuenta_confirmada_usuario = 1 where codigo_mail_usuario = ?';
        const rows = await pool.query(query,['usuarios',codigo]);
        console.log(query);
        console.log(rows);
        if(rows.affectedRows > 0){
            return true;
        } else {
            console.log("esta shit dio falsa");
            return false;
        }
    } catch (error) {
        throw error;
        
    }
}



module.exports = {registrar,confirmarUser}