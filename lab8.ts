
type Point = {
    x: number;
    y: number;
};
function printPoint(point: Point): void {
    console.log("X Coordinate: ".concat(point.x.toString(), ", Y Coordinate: ".concat(point.y.toString())));
}
const p1: Point = { x: 10, y: 20 };
printPoint(p1);
