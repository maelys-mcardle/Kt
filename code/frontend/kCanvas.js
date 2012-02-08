// kCanvas
// ---------------------------------------------------------------------
// This is the lowest level canvas management and painter for korgi,
// used to draw the components of individual frames.

function kCanvas()
{
	// Load in the canvas from the HTML5 DOM.
	this.canvas = document.getElementById("surface");
	this.context = this.canvas.getContext("2d");
	
	// Update canvas size to match the available surface area.
	// Update local properties.
	kCanvas.prototype.updateGeometry = function()
	{
		this.width  = this.canvas.width  = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;
	}

	// Draw a background.
	kCanvas.prototype.drawBackground = function(style)
	{
		this.drawRectangle(0, 0, this.canvas.width, this.canvas.height, style);
	}
	
	// Draw a rectangle.
	kCanvas.prototype.drawRectangle = function(x, y, width, height, style)
	{
		this.context.strokeStyle = style.stroke;
		this.context.fillStyle = style.fill;
		this.context.fillRect(x, y, width, height);
	}

}