var tape = require("tape"),
    polygonComplexity = require("../."),
    polygons = require("./polygons.js");
require("./approximatelyEqual.js");

tape("polygonWindingOrder CW", function (test) {
    test.equal(polygonComplexity.polygonWindingOrder(polygons.squareCcw), -1);
    test.equal(polygonComplexity.polygonWindingOrder(polygons.crossCcw), -1);
    test.end();
});

tape("polygonWindingOrder CCW", function (test) {
    test.equal(polygonComplexity.polygonWindingOrder(polygons.squareCw), 1);
    test.equal(polygonComplexity.polygonWindingOrder(polygons.crossCw), 1);
    test.end();
});