const nodemailer = require('nodemailer');
const pool = require('../DB.js');



async function sendGenericEmail(obj) {
    try {
        let codigomail = obj.codigo_mail_usuario;
        let linkconfirmacion = 'http://localhost:3000/registro/confirmar/'+codigomail;
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

module.exports = {sendGenericEmail} 