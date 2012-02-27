function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);

	/*label    = new kLabel(20, 20, 300, 100, "Korgi Widgets");
	button   = new kButton(20, 80, 100, 50, "Press Me");
	line     = new kLineEdit(20, 140, 300, 50, "Sample text...");
	checkbox = new kCheckbox(20, 200, 200, 25, "Check me out");
	picture  = new kImage(20, 250, 100, 200, "../../icon/korgi.svg");
	
	label = new kWidget(kLabel, 300, 100, */
	
	//button.onClickCallback = function() { } ;	
	//label    = new kLabel(20, 20, 300, 100, "Korgi Widgets");
	//label = new kWidget(kLabel, 20, 20, 300, 100, "Korgi is fun");
	// mainWindow.addWidget(label);
	
	label = new kLabel(0, 0, 300, 100, "Korgi Widgets");
	button = new kButton(100, 10, 100, 50, "Push");
	button2 = new kButton(100, 10, 100, 50, "Push");
	
	hLayoutTop = new kLayout(mainWindow, kOrientation.vertical);
	hLayoutTop.addWidget(label);
	hLayoutTop.addWidget(button);
	hLayoutTop.addWidget(button2);
	
	
	mainWindow.setLayout(hLayoutTop);
	mainWindow.run();
}