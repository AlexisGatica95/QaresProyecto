const nodemailer = require('nodemailer');
//const pool = require('../DB.js');



async function sendGenericEmail(obj) {
    try {
        let codigomail = obj.codigo_mail_usuario;
        let linkconfirmacion = 'http://localhost:3001/registro/confirmar/'+codigomail;
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USER, // generated ethereal user
                pass: process.env.PASS_USER // generated ethereal password
            },
            tls : {
                rejectUnauthorized : false
            }
        });
        console.log(transporter);
        // send mail with defined transport object

        let info = await transporter.sendMail({
            from: process.env.MAIL_USER, // sender address
            to: obj.mail_usuario, // list of receivers
            subject: 'Registro exitoso', // Subject line
            html: 'Hola, gracias por registrarte por favor ingresa al siguiente link para confirmar tu cuenta: <a href="'+ linkconfirmacion +'">'+ linkconfirmacion +'</a>'
        });
    
        console.log(info.messageId);
        return info.messageId;
    } catch (error) {
        throw error; 
    }

}

async function MailConfirmarPubli(obj) {
    try {
        let codigomail = obj.id_mail_p;
        let linkconfirmacion = 'http://localhost:3001/publicacion/confirmar/'+codigomail;
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, 
            auth: {
                user: process.env.MAIL_USER, 
                pass: process.env.PASS_USER 
            },
            tls : {
                rejectUnauthorized : false
            }
        });
        console.log(transporter);

        let info = await transporter.sendMail({
            from: process.env.MAIL_USER,
            to: obj.mail_p,
            subject: 'Confirma tu anuncio: '+ obj.titulo , 
            html: 'Hola,por favor ingresa al siguiente link para confirmar tu publicacion: <a href="'+ linkconfirmacion +'">'+ linkconfirmacion +'</a>'
        });
    
        console.log(info.messageId);
        return info.messageId;

    } catch (error) {
        throw error;
    }
}

module.exports = {sendGenericEmail,MailConfirmarPubli} 