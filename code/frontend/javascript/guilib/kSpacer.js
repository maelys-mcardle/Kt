// =====================================================================
// BASE FUNCTION
// =====================================================================

function kSpacer(width, height, x, y)
{
	// Store the properties from function parameters.
	this.x = optionalParameter(0, x);
	this.y = optionalParameter(0, y);
	this.baseWidth = width;
	this.baseHeight = height;
	this.width = width;
	this.height = height;
	
	// Default style.
	this.style = getStyle(kStyle.spacer);
}

