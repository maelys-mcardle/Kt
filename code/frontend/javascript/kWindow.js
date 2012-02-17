// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWindow(kCanvasObject)
{
	// Load in the canvas from the caller.
	this.canvas = kCanvasObject;
	
	// Create an empty array to store the widgets.
	this.widgets = new Array();
}

// =====================================================================
// RUN WINDOW EVENT LOOP
// =====================================================================

kWindow.prototype.run = 
function()
{
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