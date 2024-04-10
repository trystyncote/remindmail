function assert (bool)
{
    if (!bool)
    {
        throw Error("AssertionError");
    };
};


module.exports = assert;
