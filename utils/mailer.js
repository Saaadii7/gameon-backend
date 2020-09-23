const nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport(process.env.SMTP);

const transporter = nodemailer.createTransport({
    // upgrade later with STARTTLS
    auth: {
        pass: process.env.password,
        user: process.env.username
    },

    host: 'smtp.gmail.com',

    port: 587,
    secure: false
});

async function sendMail(msgOptions) {
    await transporter.sendMail(msgOptions);  
}

module.exports.sendMail = sendMail;
