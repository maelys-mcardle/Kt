// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLabel(text, width, height, x, y)
{
	// Store the properties from function parameters.
	this.x = optionalParameter(0, x);
	this.y = optionalParameter(0, y);
	this.baseWidth = width;
	this.baseHeight = height;
	this.width = width;
	this.height = height;
	this.text = text;
	
	// Default style.
	this.style = getStyle(kStyle.label);
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kLabel.prototype.draw = 
function(canvas)
{
	canvas.drawBoundedText(this.x, this.y, this.width, 
		this.height, this.text, this.style);
}
