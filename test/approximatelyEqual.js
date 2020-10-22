var tape = require("tape");

tape.Test.prototype.approximatelyEqual = function (actual, expected, delta) {
    this._assert(approximatelyEqual(actual, expected, delta), {
        message: "should be approximately equal within delta",
        operator: "approximatelyEqual",
        actual: actual,
        expected: expected
    });
};

function approximatelyEqual(actual, expected, delta) {
    return Math.abs(actual - expected) <= delta;
}