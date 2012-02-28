// =====================================================================
// BASE FUNCTION
// =====================================================================

function kImage(x, y, width, height, path)
{
	// Store the properties from function parameters.
	this.x = x;
	this.y = y;
	this.baseWidth  = width;
	this.baseHeight = height;
	this.width = width;
	this.height = height;
	this.imagePath = path;
	
	// Default style.
	this.style = getStyle(kStyle.image);
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kImage.prototype.draw = 
function(canvas)
{
	canvas.drawBoundedImage(this.x, this.y, this.width, 
		this.height, this.imagePath, this.style);
}
