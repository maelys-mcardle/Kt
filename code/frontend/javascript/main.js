
function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);

	button = new kButton(20, 20, 200, 200, "Hello");
	mainWindow.addWidget(button);
	
	mainWindow.run();
}