
function main() 
{
	canvas = new kCanvas();
	canvas.updateGeometry();
	canvas.drawBackground(kStyle.background);
	canvas.drawRectangle(10, 10, 30, 30, kStyle.rectangle);
	canvas.drawRoundedRectangle(50, 50, 30, 30, 15, kStyle.rectangle);
	canvas.drawLine(100, 100, 50, 50, kStyle.rectangle);
	canvas.drawLines(200, 100, [[10,10],[15,5],[4,3]], kStyle.rectangle);
	canvas.drawPolygon(300, 100, [[0,10],[20,30],[100,50]], kStyle.rectangle);
}