var tape = require("tape"),
    polygonComplexity = require("../."),
    polygons = require("./polygons.js");
require("./approximatelyEqual.js");

tape("square", function (test) {
    console.log(polygonComplexity.polygonCompactness(polygons.squareCw) + " " + polygonComplexity.polygonCompactness(polygons.squareCcw));
    test.assert(polygonComplexity.polygonCompactness(polygons.squareCw) == polygonComplexity.polygonCompactness(polygons.squareCcw), "compactness");
    console.log(polygonComplexity.polygonComplexity(polygons.squareCw) + " " + polygonComplexity.polygonComplexity(polygons.squareCcw));
    test.assert(polygonComplexity.polygonComplexity(polygons.squareCw) == polygonComplexity.polygonComplexity(polygons.squareCcw), "complexity");
    console.log(polygonComplexity.polygonHullDeviation(polygons.squareCw) + " " + polygonComplexity.polygonHullDeviation(polygons.squareCcw));
    test.assert(polygonComplexity.polygonHullDeviation(polygons.squareCw) == polygonComplexity.polygonHullDeviation(polygons.squareCcw), "hull deviation");
    console.log(polygonComplexity.polygonNotchCount(polygons.squareCw) + " " + polygonComplexity.polygonNotchCount(polygons.squareCcw));
    test.assert(polygonComplexity.polygonNotchCount(polygons.squareCw) == polygonComplexity.polygonNotchCount(polygons.squareCcw), "notch count");
    console.log(polygonComplexity.polygonVertexCount(polygons.squareCw) + " " + polygonComplexity.polygonVertexCount(polygons.squareCcw));
    test.assert(polygonComplexity.polygonVertexCount(polygons.squareCw) == polygonComplexity.polygonVertexCount(polygons.squareCcw), "vertex count");
    console.log(polygonComplexity.polygonVibrationAmplitude(polygons.squareCw) + " " + polygonComplexity.polygonVibrationAmplitude(polygons.squareCcw));
    test.assert(polygonComplexity.polygonVibrationAmplitude(polygons.squareCw) == polygonComplexity.polygonVibrationAmplitude(polygons.squareCcw), "vibration amplitude");
    console.log(polygonComplexity.polygonVibrationFrequency(polygons.squareCw) + " " + polygonComplexity.polygonVibrationFrequency(polygons.squareCcw));
    test.assert(polygonComplexity.polygonVibrationFrequency(polygons.squareCw) == polygonComplexity.polygonVibrationFrequency(polygons.squareCcw), "vibrationf frequency");
    test.end();
});

tape("cross", function (test) {
    console.log(polygonComplexity.polygonCompactness(polygons.crossCw) + " " + polygonComplexity.polygonCompactness(polygons.crossCcw));
    test.assert(polygonComplexity.polygonCompactness(polygons.crossCw) == polygonComplexity.polygonCompactness(polygons.crossCcw), "compactness");
    console.log(polygonComplexity.polygonComplexity(polygons.crossCw) + " " + polygonComplexity.polygonComplexity(polygons.crossCcw));
    test.assert(polygonComplexity.polygonComplexity(polygons.crossCw) == polygonComplexity.polygonComplexity(polygons.crossCcw), "complexity");
    console.log(polygonComplexity.polygonHullDeviation(polygons.crossCw) + " " + polygonComplexity.polygonHullDeviation(polygons.crossCcw));
    test.assert(polygonComplexity.polygonHullDeviation(polygons.crossCw) == polygonComplexity.polygonHullDeviation(polygons.crossCcw), "hull deviation");
    console.log(polygonComplexity.polygonNotchCount(polygons.crossCw) + " " + polygonComplexity.polygonNotchCount(polygons.crossCcw));
    test.assert(polygonComplexity.polygonNotchCount(polygons.crossCw) == polygonComplexity.polygonNotchCount(polygons.crossCcw), "notch count");
    console.log(polygonComplexity.polygonVertexCount(polygons.crossCw) + " " + polygonComplexity.polygonVertexCount(polygons.crossCcw));
    test.assert(polygonComplexity.polygonVertexCount(polygons.crossCw) == polygonComplexity.polygonVertexCount(polygons.crossCcw), "vertex count");
    console.log(polygonComplexity.polygonVibrationAmplitude(polygons.crossCw) + " " + polygonComplexity.polygonVibrationAmplitude(polygons.crossCcw));
    test.assert(polygonComplexity.polygonVibrationAmplitude(polygons.crossCw) == polygonComplexity.polygonVibrationAmplitude(polygons.crossCcw), "vibration amplitude");
    console.log(polygonComplexity.polygonVibrationFrequency(polygons.crossCw) + " " + polygonComplexity.polygonVibrationFrequency(polygons.crossCcw));
    test.assert(polygonComplexity.polygonVibrationFrequency(polygons.crossCw) == polygonComplexity.polygonVibrationFrequency(polygons.crossCcw), "vibrationf frequency");
    test.end();
});
