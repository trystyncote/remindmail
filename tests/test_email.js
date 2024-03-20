const EMAIL = require("../remindmail/email");


const RECEIVER_ADDRESS = "dummy@email"


function test_email_body_preserve()
{
    const expected_body = "EXPECTED\n\nBODY\n\nHERE";
    EMAIL.send_email(RECEIVER_ADDRESS, expected_body);

    // CHECK EMAIL;
};


function test_email_sent_successful()
{
    EMAIL.send_email(RECEIVER_ADDRESS, "");

    // CHECK EMAIL;
};


test_email_body_preserve();
test_email_sent_successful();
