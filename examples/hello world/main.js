function main(canvasId) 
{
	// Setup the surface for the widgets.
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);
	
	// Create the widget for hello world.
	label = new kLabel("Hello World!", 640, 100);
	mainWindow.addWidget(label);
	
	// Run the event loop.
	mainWindow.run();
}
