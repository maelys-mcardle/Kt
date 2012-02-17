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
	this.canvas.setGeometry(window.innerWidth, window.innerHeight);
	this.canvas.drawBackground(kStyle.background);
	this.canvas.render();
	
	
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