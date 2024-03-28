// This script is compatible with NodeJS, and must be used with the correct
// framework to allow this to work properly.

const express = require("express");
const EMAIL = require("./email/email");


const app = express();
const PORT = 2024;


app.listen(PORT, () => {
    console.log(`connected, port ${PORT}`);
    const response = EMAIL.send_email("trystynmcote@gmail.com", "I SENT AN EMAIL");
    console.log(response);
});
