// =====================================================================
// BASE FUNCTION
// =====================================================================

function kSpacer(x, y, width, height)
{
	// Store the properties from function parameters.
	this.x = x;
	this.y = y;
	this.baseWidth = width;
	this.baseHeight = height;
	this.width = width;
	this.height = height;
	
	// Default style.
	this.style = getStyle(kStyle.spacer);
}

