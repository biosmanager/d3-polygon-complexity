var tape = require("tape"),
    polygonComplexity = require("../."),
    polygons = require("./polygons.js");
require("./approximatelyEqual.js");

tape("polygonComplexity CW", function (test) {
    test.approximatelyEqual(polygonComplexity.polygonComplexity(polygons.squareCw), 0, 0.001);
    test.approximatelyEqual(polygonComplexity.polygonComplexity(polygons.crossCw), 0.008, 0.001);
    test.end();
});

tape("polygonComplexity CCW", function (test) {
    test.approximatelyEqual(polygonComplexity.polygonComplexity(polygons.squareCcw), 0, 0.001);
    test.approximatelyEqual(polygonComplexity.polygonComplexity(polygons.crossCcw), 0.008, 0.001);
    test.end();
});

tape("polygonNotchCount", function (test) {
    test.equal(polygonComplexity.polygonNotchCount(polygons.squareCw), 0);
    test.equal(polygonComplexity.polygonNotchCount(polygons.squareCcw), 0);
    test.equal(polygonComplexity.polygonNotchCount(polygons.crossCw), 4);
    test.equal(polygonComplexity.polygonNotchCount(polygons.crossCcw), 4);
    test.end();
});