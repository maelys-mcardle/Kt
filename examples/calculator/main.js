//#include "logic.js"

function main(canvasId) 
{
	// Setup the surface for the widgets.
	canvas = new kCanvas(canvasId);
	mainWindow = new kWindow(canvas);
	
	// Create the widgets.
	screen  = new kLineEdit("0");
	button0 = new kButton("0");
	button1 = new kButton("1");
	button2 = new kButton("2");
	button3 = new kButton("3");
	button4 = new kButton("4");
	button5 = new kButton("5");
	button6 = new kButton("6");
	button7 = new kButton("7");
	button8 = new kButton("8");
	button9 = new kButton("9");
	buttonAdd      = new kButton("+");
	buttonSubtract = new kButton("-");
	buttonMultiply = new kButton("*");
	buttonDivide   = new kButton("/");
	buttonEquals   = new kButton("=");
	buttonClear    = new kButton("CLR");
	
	// Define what the widgets do.
	button0.onClickCallback = function() {screen.text += "0";};
	button1.onClickCallback = function() {screen.text += "1";};
	button2.onClickCallback = function() {screen.text += "2";};
	button3.onClickCallback = function() {screen.text += "3";};
	button4.onClickCallback = function() {screen.text += "4";};
	button5.onClickCallback = function() {screen.text += "5";};
	button6.onClickCallback = function() {screen.text += "6";};
	button7.onClickCallback = function() {screen.text += "7";};
	button8.onClickCallback = function() {screen.text += "8";};
	button9.onClickCallback = function() {screen.text += "9";};
	buttonClear.onClickCallback = function() {screen.text = "0";};
	
	buttonAdd.onClickCallback = function() {
		operatorTrigger("+", screen);};
	buttonSubtract.onClickCallback = function() {
		operatorTrigger("-", screen);};
	buttonMultiply.onClickCallback = function() {
		operatorTrigger("*", screen);};
	buttonDivide.onClickCallback = function() {
		operatorTrigger("/", screen);};
		
	buttonEquals.onClickCallback = function() {calculate(screen);};
		
	// Place the widgets.
	verticalLayout = new kLayout(mainWindow, kOrientation.vertical);
	verticalLayout.addWidget(screen);
	
	row0 = new kLayout(verticalLayout, kOrientation.horizontal);
	row0.addWidget(button7);
	row0.addWidget(button8);
	row0.addWidget(button9);
	row0.addWidget(buttonAdd);
	
	row1 = new kLayout(verticalLayout, kOrientation.horizontal);
	row1.addWidget(button4);
	row1.addWidget(button5);
	row1.addWidget(button6);
	row1.addWidget(buttonSubtract);
	
	row2 = new kLayout(verticalLayout, kOrientation.horizontal);
	row2.addWidget(button1);
	row2.addWidget(button2);
	row2.addWidget(button3);
	row2.addWidget(buttonDivide);
	
	row3 = new kLayout(verticalLayout, kOrientation.horizontal);
	row3.addWidget(button0);
	row3.addWidget(buttonEquals);
	row3.addWidget(buttonMultiply);
	row3.addWidget(buttonClear);
	
	// Run the event loop.
	mainWindow.run();
}
