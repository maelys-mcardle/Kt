// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWindow(kCanvasObject)
{
	// Load in the canvas from the caller.
	this.canvas = kCanvasObject;
	
	// Create an empty array to store the widgets.
	this.widgets = new Array();
	
	// Initiate an event handler to grab mouse/keyboard input.
	this.eventHandler = new kEventHandler();
}

// =====================================================================
// RUN WINDOW EVENT LOOP
// =====================================================================

kWindow.prototype.run = 
function()
{
	// Interpret UI events.
	this.interpretEvents();
	
	// Draw the background and the widgets.
	this.drawWindow();
	
	// Wait before running the event loop again.
	kWindowInstance = this;
	setTimeout(function() { kWindowInstance.run(); }, 100);
}

// =====================================================================
// ADD WIDGETS TO WINDOW
// =====================================================================

kWindow.prototype.addWidget = 
function(kWidgetObject)
{
	this.widgets.push(kWidgetObject);
}

// =====================================================================
// PASS UI INTERACTION TO WIDGET
// =====================================================================

kWindow.prototype.interpretEvents = 
function()
{
	var events = this.eventHandler.getEvents();
	
	while (events.length > 0) {
		var event = events.shift();
	}
		
	
}

// =====================================================================
// DRAW WINDOW
// =====================================================================

kWindow.prototype.drawWindow = 
function()
{
	// Update the window properties, and set the background.
	this.canvas.setGeometry(window.innerWidth, window.innerHeight);
	this.canvas.drawBackground(kStyle.background);
	
	// Go widget by widget and draw it.
	for (var i = 0; i < this.widgets.length; i++)
		this.widgets[i].draw(this.canvas);
	
	// Render the canvas.
	this.canvas.render();
}