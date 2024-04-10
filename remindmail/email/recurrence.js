const GLOBALS = require("../globals");


const RECURRENCE_REGEX = /(\d+\.{0,1}\d*)\s*(sec|min|hrs|day|wks|mth|yrs)/;


function _get_constant (string_name)
{
    // I am aware this is really not good, but I have hardly the time to come
    // up with something more clever and optimized.
    if (string_name === "wks")
    {
        return GLOBALS.TIME.WEEKS;
    }
    else if (string_name === "day")
    {
        return GLOBALS.TIME.DAYS;
    }
    else if (string_name === "hrs")
    {
        return GLOBALS.TIME.HOURS;
    }
    else if (string_name === "min")
    {
        return GLOBALS.TIME.MINUTES;
    }
    else if (string_name === "sec")
    {
        return GLOBALS.TIME.SECONDS;
    }
    else
    {
        throw Error(`Invalid constant name provided: ${string_name}.`)
    };
};


function _check_leap_year ()
{
    const year = new Date().getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};


function _get_month_length ()
{
    // There is one critical oversight with this function; if a monthly
    // recurrence occurs on the 30th or 31st, it will overflow and cause
    // issues, since monthly recurrences are meant to occur based on date
    // (Jan. 25 -> Feb. 25 -> etc). I don't have enough time to figure out the
    // solution, so that's ultimately going to remain unfinished. :(
    const month = new Date().getMonth();
    // Jan, Mar, May, Jul, Aug, Oct, Dec
    if (month in {0: null, 2: null, 4: null, 6: null, 7: null, 9: null, 11: null})
    {
        return GLOBALS.TIME.MONTHS.THIRTY_ONE;
    }
    // Apr, Jun, Sep, Nov
    else if (month in {3: null, 5: null, 8: null, 10: null})
    {
        return GLOBALS.TIME.MONTHS.THIRTY;
    }
    // Feb
    else
    {
        if (_check_leap_year())
        {
            return GLOBALS.TIME.MONTHS.TWENTY_NINE;
        }
        else
        {
            return GLOBALS.TIME.MONTHS.TWENTY_EIGHT;
        };
    };
};


function _get_year_length ()
{
    if (_check_leap_year())
    {
        return GLOBALS.TIME.YEARS.LEAP;
    }
    else
    {
        return GLOBALS.TIME.YEARS.NON_LEAP;
    };
};


function calculate_recurrence (recurrence)  // -> int
{
    const match = RECURRENCE_REGEX.exec(recurrence);
    if (match === null)
    {
        return 0;
    };

    let factor = match[2];  // 'sec', 'min', etc.
    if (factor in {"sec": null, "min": null} && GLOBALS.ENVIRONMENT === "production")
    {
        return 0;
    };

    const length = parseFloat(match[1]);

    if (factor === "yrs")
    {
        return length * _get_year_length();
    }
    else if (factor === "mth")
    {
        return length * _get_month_length();
    };

    factor = _get_constant(factor);
    return length * factor;
};


module.exports = calculate_recurrence;
