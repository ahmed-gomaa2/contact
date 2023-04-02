const nodemailer = require('nodemailer');
const config = require('../config');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'engahmedgomaa97@gmail.com',
        pass: config.gmailPassword
    },
    // tls: {
    //     rejectUnauthorized: false
    // }
});

const generateMailOptions = (body) => {
    return {
        from: body.email,
        to: 'engahmedgomaa1997@gmail.com',
        subject: body.subject,
        text: `
            email: ${body.email}
            phone: ${body.phone}
            message: ${body.message}
        `
    }
}

module.exports = app => {
    app.post('/send-email', async (req, res) => {
        const body = req.body;

        transporter.sendMail(generateMailOptions(body), (err, info) => {
            if(err) {
                res.send(err);
            }else {
                res.send(info);
            }
        })
    });
}