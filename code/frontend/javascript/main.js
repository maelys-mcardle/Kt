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
	
	hLayoutTop = new kLayout(mainWindow, kLayoutPolicy.horizontal);
	label = new kWidget(mainWindow, kLabel, "Korgi Widgets");
	
	label.x = 100;
	label.y = 30;
	label.width = 200;
	label.maximumHeight = kLayoutPolicy.noMaximum;
	label.layoutPolicy = kLayoutPolicy.expanding;
	label.text = "Fun times";
	
	
	label2 = new kWidget(mainWindow, kLabel, "Korgi Widgets");
	label2.x = 10;
	label2.y = 10;
	
	//hLayoutTop.createWidget(kLabel, kLayoutPolicy.expand, 300, 100, 0, 0, "Korgi Widgets");
	//hLayoutTop.addWidget(button);
	
	hLayoutMiddle = new kLayout(kLayoutPolicy.horizontal);
	//hLayoutMiddle.addWidget(line);
	//hLayoutMiddle.addWidget(picture);
	
	vLayout = new kLayout(kLayoutPolicy.vertical);
	vLayout.addLayout(hLayoutTop);
	vLayout.addLayout(hLayoutMiddle);
	//vLayout.addWidget(checkbox);
	
	mainWindow.run();
}