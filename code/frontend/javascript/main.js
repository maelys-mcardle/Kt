function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);
	
	label = new kLabel("Korgi Widgets", 300, 50);
	button = new kButton("Push", 100, 50);
	label2 = new kLabel("Child Wee", 300, 50);
	button2 = new kButton("Childish", 100, 50);
	spacer = new kSpacer(100, 50);
	
	hLayoutTop = new kLayout(mainWindow, kOrientation.horizontal);
	hLayoutTop.addWidget(label);
	hLayoutTop.addWidget(button);
	
	vLayoutTop = new kLayout(hLayoutTop, kOrientation.vertical);
	vLayoutTop.addWidget(label2);
	vLayoutTop.addWidget(button2);
	vLayoutTop.addWidget(spacer);
	
	socket = kSocket("ws://localhost/");
	
	mainWindow.run();
}