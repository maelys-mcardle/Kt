// =====================================================================
// BASE FUNCTION
// =====================================================================

function kImage(x, y, path)
{
	// Store the properties from function parameters.
	this.x = x;
	this.y = y;
	this.imagePath = path;
	
	// Default style.
	this.style = kStyle.image;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kImage.prototype.draw = 
function(canvas)
{
	canvas.drawBoundedImage(this.x, this.y, this.style.width, 
		this.style.height, this.imagePath, this.style);
}
