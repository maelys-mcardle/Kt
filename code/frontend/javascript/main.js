
function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);

	button = new kButton(20, 20, 100, 50, "Press Me");
	button.onClickCallback = function() { } ;
	mainWindow.addWidget(button);
	
	mainWindow.run();
}