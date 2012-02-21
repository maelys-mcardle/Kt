
function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);

	label = new kLabel(20, 20, 300, 100, "Korgi Widgets");
	mainWindow.addWidget(label);
	
	button = new kButton(20, 80, 100, 50, "Press Me");
	button.onClickCallback = function() { } ;
	mainWindow.addWidget(button);
	
	line = new kLineEdit(20, 140, 300, 50, "Sample text...");
	mainWindow.addWidget(line);
	
	mainWindow.run();
}