import { polygonLength, polygonArea } from "d3-polygon";

export default function(polygon) {
    return polygonLength(polygon) / 3.54 * Math.sqrt(Math.abs(polygonArea(polygon)));
}