const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'engahmedgomaa97@gmail.com',
        pass: process.env.gmail_password
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