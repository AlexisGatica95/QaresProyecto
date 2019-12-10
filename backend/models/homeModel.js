const pool = require('../DB');

async function mostrar(categoria) {
    try {
        if (categoria==0) {
            let query = 'select publicaciones.titulo,publicaciones.texto,publicaciones.edad,publicaciones.telefono,categorias.nombre_c as categoria from ?? JOIN categorias on publicaciones.categoria = categorias.id_c where publicaciones.activa = 1 limit 10';
            const rows = await pool.query(query,['publicaciones']);
            
            return rows;

        } else {
            let query2 = 'select publicaciones.titulo,publicaciones.texto,publicaciones.edad,publicaciones.telefono,categorias.nombre_c as categoria from ?? JOIN categorias on publicaciones.categoria = categorias.id_c where publicaciones.categoria = ? and publicaciones.activa = 1 limit 10';

            const rows2 = await pool.query(query2,['publicaciones',categoria]);
            console.log(rows2);
            return rows2;
            
        }
        

    } catch (error) {
        throw error; 
    }
}



module.exports ={mostrar}