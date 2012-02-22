// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLabel(x, y, width, height, text)
{
	// Store the properties from function parameters.
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height = height;
	this.label  = text;
	
	// Default style.
	this.style = kStyle.label;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kLabel.prototype.draw = 
function(canvas)
{
	canvas.drawBoundedText(this.x, this.y, this.width, 
		this.height, this.label, this.style);
}
