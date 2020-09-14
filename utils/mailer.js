const nodemailer = require('nodemailer');
const Q = require('q');

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

function sendMail (msgOptions) {
    const deferred = Q.defer();

    transporter.sendMail(msgOptions, function (error, info) {
        if (error)
            deferred.reject(error);
        else
            deferred.resolve(info);
    });

    return deferred.promise;
}

module.exports.sendMail = sendMail;
