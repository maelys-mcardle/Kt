
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
	
	checkbox = new kCheckbox(20, 200, 200, 25, "Check me out");
	mainWindow.addWidget(checkbox);
	
	picture = new kImage(20, 250, 100, 200, "../../icon/korgi.svg");
	mainWindow.addWidget(picture);
	
	mainWindow.run();
}