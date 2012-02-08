
function main() 
{
	canvas = new kCanvas();
	canvas.updateGeometry();
	canvas.drawBackground(kStyle.background);
	canvas.drawRectangle(10, 10, 30, 30, kStyle.rectangle);
	canvas.drawRectangle(50, 50, 30, 30, kStyle.other);
}