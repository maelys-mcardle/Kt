// =====================================================================
// CONSTRUCTOR
// =====================================================================

function kCanvas()
{
	// Load in the canvas from the HTML5 DOM.
	this.canvas  = document.getElementById("surface");
	this.context = this.canvas.getContext("2d");
}

// =====================================================================
// CANVAS & CONTEXT MANAGEMENT
// =====================================================================

kCanvas.prototype.updateGeometry = 
function()
{
	this.width  = this.canvas.width  = window.innerWidth;
	this.height = this.canvas.height = window.innerHeight;
}

kCanvas.prototype.loadStyle = 
function(style)
{
	this.context.strokeStyle = style.lineColour;
	this.context.lineWidth   = style.lineWidth;
	this.context.fillStyle   = style.fillColour;
}	

// =====================================================================
// DRAW BASIC PRIMITIVES
// =====================================================================

kCanvas.prototype.drawRectangle = 
function(x, y, width, height, style)
{
	// Load the style into the context.
	this.loadStyle(style);
	
	// If we have fill/line information, draw the rectangle.
	if (style.fillColour) this.context.fillRect(x, y, width, height);
	if (style.lineColour) this.context.strokeRect(x, y, width, height);
}

kCanvas.prototype.drawRoundedRectangle = 
function(x, y, width, height, radius, style)
{
	// Load the style information.
	this.loadStyle(style);
	
	// Path out the rounded rectangle.
	this.context.beginPath();
	this.context.moveTo(x + radius, y);
	this.context.lineTo(x + width - radius, y);
	this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
	this.context.lineTo(x + width, y + height - radius);
	this.context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	this.context.lineTo(x + radius, y + height);
	this.context.quadraticCurveTo(x, y + height, x, y + height - radius);
	this.context.lineTo(x, y + radius);
	this.context.quadraticCurveTo(x, y, x + radius, y);
	this.context.closePath();
	
	// Draw the rounded rectangle.
	if (style.fillColour) this.context.fill();
	if (style.lineColour) this.context.stroke();
}

kCanvas.prototype.drawLine = 
function(x1, y1, x2, y2, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Define the line.
	this.context.beginPath();
	this.context.moveTo(x1, y1);
	this.context.lineTo(x2, y2);
	this.context.closePath();
	
	// Draw the line.
	this.context.stroke();
}

kCanvas.prototype.drawLine = 
function(coordinates, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Define the line.
	this.context.beginPath();
	//this.context.moveTo(x1, y1);
	//this.context.lineTo(x2, y2);
	this.context.closePath();
	
	// Draw the line.
	this.context.stroke();
}

kCanvas.prototype.drawText = 
function(x, y, width, height, style)
{
	this.loadStyle(style);
}

// =====================================================================
// DRAW COMPLEX PRIMITIVES (DEPEND ON BASIC PRIMITIVES)
// =====================================================================

kCanvas.prototype.drawBackground = 
function(style)
{
	// A background is just a rectangle that fills the screen. 
	this.drawRectangle(0, 0, this.canvas.width, 
		this.canvas.height, style);
}

