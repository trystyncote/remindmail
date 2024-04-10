// This script is compatible with NodeJS, and must be used with the correct
// framework to allow this to work properly.

const express = require("express");

const CYCLE = require("./email/cycle");
const GLOBALS = require("./globals");


const app = express();
const PORT = 2024;


app.listen(PORT, () => {
    console.log(`connected, port ${PORT}`);

    const workload = [
        {
            receiver: "trystyn.m.cote@gmail.com",
            time: Date.now() + (5 * GLOBALS.TIME.SECONDS),
            subject: "",
            body: "BODY OF EMAIL ONE",
            recurrence: "10sec"  // 1/4 min = 15 seconds
        },
        {
            receiver: "trystyn.m.cote@gmail.com",
            time: Date.now() + (18 * GLOBALS.TIME.SECONDS),
            subject: "",
            body: "BODY OF EMAIL TWO",
            recurrence: "12sec"
        },
        {
            receiver: "trystyn.m.cote@gmail.com",
            time: Date.now() + (30 * GLOBALS.TIME.SECONDS),
            subject: "",
            body: "BODY OF SINGLE-OCCURING EMAIL"
        }
    ];
    CYCLE.cycle_workload(workload);
});
