import { polygonArea, polygonHull, polygonLength } from "d3-polygon";

export default function(polygon) {
    var amp = vibrationAmplitude(polygon);
    var freq = vibrationFrequency(polygon);
    return 0.8 * amp * freq * (0.2 * convexHullDeviation(polygon));
}

export function convexHullDeviation(polygon) {
    var hullArea = Math.abs(polygonArea(polygonHull(polygon)));
    return Math.abs(hullArea - polygonArea(polygon)) / hullArea;
} 

export function vibrationAmplitude(polygon) {
    var polygonBoundary = polygonLength(polygon);
    return (polygonBoundary - polygonLength(polygonHull(polygon))) / polygonBoundary; 
}

export function vibrationFrequency(polygon) {
    var notchesNorm = notchCount(polygon) / (vertexCount(polygon) - 3);
    return 16 * Math.pow(notchesNorm - 0.5, 4) - 8 * Math.pow(notchesNorm - 0.5, 2) + 1;
}

export function vertexCount(polygon) {
    return polygon.length - 1;
}

// TODO: Different when CW and CCW
export function notchCount(polygon) {
    var notchCount = 0;
    var triplet = [];
    for (var i = 0; i < polygon.length + 1; i++) {
        var vertex = polygon[i % polygon.length];
        triplet.push(vertex);
        
        if (triplet.length > 3) {
            triplet.shift();
        }
        if (triplet.length === 3) {
            var dx1 = triplet[1][0] - triplet[0][0];
            var dy1 = triplet[1][1] - triplet[0][1];
            var dx2 = triplet[2][0] - triplet[1][0];
            var dy2 = triplet[2][1] - triplet[1][1];
            var crossProduct = dx1 * dy2 - dy1 * dx2;

            if (crossProduct > 0) {
                notchCount++;
            }
        }
    }
    
    return notchCount;
}

// Determines winding order of polygon
// Returns:
// +1 if clockwise
// -1 if counter-clockwise
export function windingOrder(polygon) {
    // Method from https://stackoverflow.com/a/1165943 by Beta and Roberto Bonvallet.
    // CC BY-SA 3.0 (https://creativecommons.org/licenses/by-sa/3.0/)
    // Sum((x[(i + 1) mod N]- x[i]) * (y[i] + y[(i + 1) mod N]) )  
    // return Math.sign(polygon.reduce((acc, _, idx, src) => {
    //     return acc + ((src[(idx + 1) % src.length][0] - src[idx][0]) * 
    //                     (src[idx][1] + src[(idx + 1) % src.length][1]));
    // }, 0));

    var sum = 0;
    for (var i = 0; i < polygon.length; i++) {
        var x2 = polygon[(i + 1) % polygon.length][0];
        var x1 = polygon[i][0];
        var y2 = polygon[(i + 1) % polygon.length][1];
        var y1 = polygon[i][1];
        sum += (x2 - x1) * (y2 + y1);
    }

    return Math.sign(sum);
}