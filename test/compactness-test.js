var tape = require("tape"),
    polygonComplexity = require("../."),
    polygons = require("./polygons.js");
require("./approximatelyEqual.js");

tape("polygonCompactness CW", function (test) {
    test.approximatelyEqual(polygonComplexity.polygonCompactness(polygons.squareCw), 1.13, 0.001);
    test.approximatelyEqual(polygonComplexity.polygonCompactness(polygons.crossCw), 7.58, 0.001);
    test.end();
});

tape("polygonCompactness CCW", function (test) {
    test.approximatelyEqual(polygonComplexity.polygonCompactness(polygons.squareCcw), 1.13, 0.001);
    test.approximatelyEqual(polygonComplexity.polygonCompactness(polygons.crossCcw), 7.58, 0.001);
    test.end();
});