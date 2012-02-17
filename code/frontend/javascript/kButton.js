// =====================================================================
// BASE FUNCTION
// =====================================================================

function kButton(x, y, width, height, label)
{
	// Store the button properties.
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height = height;
	this.label  = label;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kButton.prototype.draw = 
function(canvas)
{
	canvas.drawRoundedRectangle(this.x, this.y, this.width, 
		this.height, 5, kStyle.button);
	
	canvas.drawBoundedText(this.x, this.y, this.width, 
		this.height, this.label, kStyle.button);
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================
