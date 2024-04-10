const ENVIRONMENT = "test";  // TODO: Change to 'production' when not testing.


const _MILLISECONDS = 1;
const _SECONDS = 1000 * _MILLISECONDS;
const _MINUTES = 60 * _SECONDS;
const _HOURS = 60 * _MINUTES;
const _DAYS = 24 * _HOURS;
const _WEEKS = 7 * _DAYS;
const _MONTHS = {
    "TWENTY_EIGHT": 28 * _DAYS,
    "TWENTY_NINE": 29 * _DAYS,
    "THIRTY": 30 * _DAYS,
    "THIRTY_ONE": 31 * _DAYS
};
const _YEARS = {
    "LEAP": 366 * _DAYS,
    "NON_LEAP": 365 * _DAYS
};


module.exports = {
    "ENVIRONMENT": ENVIRONMENT,
    "TIME": {
        "MILLISECONDS": _MILLISECONDS,
        "SECONDS": _SECONDS,
        "MINUTES": _MINUTES,
        "HOURS": _HOURS,
        "DAYS": _DAYS,
        "WEEKS": _WEEKS,
        "MONTHS": _MONTHS,
        "YEARS": _YEARS
    }
};
