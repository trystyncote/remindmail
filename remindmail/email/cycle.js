const event_loop_sleep = require("event-loop-sleep");

const calculate_recurrence = require("./recurrence");
const EMAIL = require("./email");


function cycle_workload (workload)
{
    let a = null;
    // console.log(`!! ${workload}`);
    while (true)
    {
        for (const work of workload)
        {
            if (work.time > Date.now())
            {
                continue;
            };

            a = EMAIL.send_email_simulate(work.receiver, work.body);
            if ("recurrence" in work)
            {
                console.log(work.time);
                work.time += calculate_recurrence(work.recurrence);
                console.log(work.time);
            }
            else
            {
                work.sent = true;
            };

            // a = (
            //     EMAIL.send_email(work.receiver, work.body)
            //     .then((response) => { console.log(response); })
            //     .catch((error) => { console.log(error); })
            // );
            console.log("GOOD");
        };

        event_loop_sleep(1000);
        workload = workload.filter(item => item.sent !== true);
        // array = array.filter(item => item.x !== false);
    };
};


module.exports = {
    "cycle_workload": cycle_workload
};
