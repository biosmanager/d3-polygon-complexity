# d3-polygon-complexity

This modules provides a few polygon complexity measures.

## API Reference

All polygons are expected as arrays that contain two-element vertex arrays where the first element is the x coordinate and the second is the y coordinate. The first and last vertex must be the same (closed polygon).

<a href="#polygonCompactness" name="polygonCompactness">#</a> d3.<b>polygonCompactness</b>(<i>polygon</i>) [<>](./src/compactness.js#L3 "Source Code")

Calculate the compactness of a polygon. Value is `1` for a perfect circle.

<a href="#polygonComplexity" name="polygonComplexity">#</a> d3.<b>polygonComplexity</b>(<i>polygon</i>) [<>](./src/complexity.js#L3 "Source Code")

Calculates the normalized difference between the area of the polygon and the area of its convex hull [1].

<a href="#polygonHullDeviation" name="polygonHullDeviation">#</a> d3.<b>polygonHullDeviation</b>(<i>polygon</i>) [<>](./src/complexity.js#L9 "Source Code")

Calculates local variability of the polygons boundary [1].

<a href="#polygonVibrationAmplitude" name="polygonVibrationAmplitude">#</a> d3.<b>polygonVibrationAmplitude</b>(<i>polygon</i>) [<>](./src/complexity.js#L14 "Source Code")

Calculates the normalized difference between the length of the polygon boundary and the length of the boundary of its convex hull [1].

<a href="#polygonVibrationFrequency" name="polygonVibrationFrequency">#</a> d3.<b>polygonVibrationFrequency</b>(<i>polygon</i>) [<>](./src/complexity.js#L19 "Source Code")

Calculates local variability of the polygons boundary [1].

<a href="#polygonVertexCount" name="polygonVertexCount">#</a> d3.<b>polygonVertexCount</b>(<i>polygon</i>) [<>](./src/complexity.js#L24 "Source Code")

Returns the number of vertices of the polygon. Assumes a closed polygon.

<a href="#polygonNotchCount" name="polygonNotchCount">#</a> d3.<b>polygonNotchCount</b>(<i>polygon</i>) [<>](./src/complexity.js#L29 "Source Code")

Calculates the number of notches in the polygon. A notch occurs at a vertex where the interior angle is larger than `180°` or `π`.

<a href="#polygonWindingOrder" name="polygonWindingOrder">#</a> d3.<b>polygonWindingOrder</b>(<i>polygon</i>) [<>](./src/complexity.js#L59 "Source Code")

Calculates the winding order of the polygon. Returns `-1` if counter-clockwise, `1` if clockwise.

## References

[1] Brinkhoff, T., Kriegel, H. P., Schneider, R., & Braun, A. (1995, December). Measuring the Complexity of Polygonal Objects. In ACM-GIS (p. 109). http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.73.1045&rep=rep1&type=pdf
