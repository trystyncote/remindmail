const nodemailer = require("nodemailer");


const SENDER = {
    address: "monique.stokes@ethereal.email",
    password: "2gUsj4GJuKmjSXbfc8"
};

const TRANSPORTER = nodemailer.createTransport({
    host: "smtp.ethereal.email",  // Ethereal is a substitute email service
    // designed to be used with `nodemailer`. It is used here as a substitute
    // for a real email service while the functionality is being set-up.
    port: 587,
    auth: {
        user: SENDER.address,
        pass: SENDER.password
    }
});


function send_email (recipient, body) {
    const message = {
        from: SENDER.address,
        to: recipient,
        subject: "SUBJECT",
        text: body
    };

    TRANSPORTER.sendMail(message);
    return 1;  // `1` meaning "good".
};


function send_email_simulate (recipient, body)
{
    console.log(recipient);
    console.log(body);
    return 1;
};


module.exports = {
    "send_email": send_email,
    "send_email_simulate": send_email_simulate
};
