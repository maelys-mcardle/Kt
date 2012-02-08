// =====================================================================
// DESCRIPTION
// =====================================================================
/*

This is the lowest level canvas management and painter for korgi,
used to draw the components of individual frames.

*/
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
// CANVAS MANAGEMENT
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
	this.context.strokeStyle = style.stroke;
	this.context.fillStyle   = style.fill;
	this.context.lineWidth   = style.lineWidth;
}	

// =====================================================================
// DRAW PRIMITIVES
// =====================================================================

kCanvas.prototype.drawBackground = 
function(style)
{
	this.drawRectangle(0, 0, this.canvas.width, 
		this.canvas.height, style);
}

kCanvas.prototype.drawRectangle = 
function(x, y, width, height, style)
{
	this.loadStyle(style);
	
	if (style.fill)   
		this.context.fillRect(x, y, width, height);
	
	if (style.stroke) 
		this.context.strokeRect(x, y, width, height);
}

kCanvas.prototype.drawRoundedRectangle = 
function(x, y, width, height, radius, style)
{
	this.loadStyle(style);
	this.context.fillRect(x, y, width, height);
}

kCanvas.prototype.drawLine = 
function(x1, y1, x2, y2, style)
{
	this.loadStyle(style);
}

kCanvas.prototype.drawText = 
function(x, y, width, height, style)
{
	this.loadStyle(style);
}
