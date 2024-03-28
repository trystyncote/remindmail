const assert = require("./functions.js");
const EMAIL = require("../remindmail/email/email");


const RECEIVER_ADDRESS = "dummy@email"


function test_email_body_preserve()
{
    const expected_body = "EXPECTED\n\nBODY\n\nHERE";
    const response = EMAIL.send_email(RECEIVER_ADDRESS, expected_body);

    assert(response == 1);
    console.log(`[test_email_body_preserve] Check for result with expected body: \`\`\`${expected_body}\`\`\``);
};


function test_email_sent_successful()
{
    const response = EMAIL.send_email(RECEIVER_ADDRESS, "");
    assert(response == 1);
};


test_email_body_preserve();
test_email_sent_successful();
