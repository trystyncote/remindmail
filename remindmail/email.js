const nodemailer = require("nodemailer");


const SENDER_ADDRESS = "remindmail.example@gmail.com";
const SENDER_PASSWORD = "SuperSecurePassword246";

const TRANSPORTER = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: SENDER_ADDRESS,
        pass: SENDER_PASSWORD
    }
});


function send_email (recipient, body) {
    const message = {
        from: SENDER_ADDRESS,
        to: recipient,
        subject: "SUBJECT",
        text: body
    };

    TRANSPORTER.sendMail(message, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`email sent: ${info.response}`);
        }
    });
};


module.exports = {
    "send_email": send_email
};
