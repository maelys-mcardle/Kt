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
	canvas.drawRectangle(10, 10, 200, 200, kStyle.rectangle);
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================
