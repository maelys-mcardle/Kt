
function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);

	button = new kButton(20, 20, 100, 50, "Press Me");
	button.onClickCallback = function() { alert("wee"); } ;
	mainWindow.addWidget(button);
	
	label = new kLabel(200, 20, 150, 100, "Press Me");
	mainWindow.addWidget(label);
	
	mainWindow.run();
}