
function main() 
{
	canvas = new kCanvas("surface");
	canvas.setGeometry(window.innerWidth, window.innerHeight);
	canvas.clear();
	canvas.drawBackground(kStyle.background);
	canvas.drawRectangle(10, 10, 30, 30, kStyle.rectangle);
	canvas.drawRoundedRectangle(50, 50, 30, 30, 15, kStyle.rectangle);
	canvas.drawLine(100, 100, 50, 50, kStyle.rectangle);
	canvas.drawLines(200, 100, [[10,10],[15,5],[4,3]], kStyle.rectangle);
	canvas.drawPolygon(300, 100, [[0,10],[20,30],[100,50]], kStyle.rectangle);
	canvas.drawText(400,10,"Heeeey!", kStyle.text);
	canvas.drawRectangle(400,200,500,200,kStyle.rectangle);
	canvas.drawBoundedText(400, 200, 500, 200, "So whis is not cool and that cat kool.", kStyle.text);
	canvas.drawEllipse(600,100,200,200,kStyle.rectangle);
	canvas.drawImage(20, 20, "../../icon/korgi_128px.png", kStyle.image);
	canvas.drawBoundedImage(100, 100, 400, 400, "../../icon/korgi_128px.png", kStyle.image);
	canvas.render();
	setTimeout(main, 100);
}