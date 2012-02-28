// =====================================================================
// BASE FUNCTION
// =====================================================================

function kCheckbox(text, width, height, x, y)
{
	// Store the properties from function parameters.
	this.x = optionalParameter(0, x);
	this.y = optionalParameter(0, y);
	this.baseWidth = width;
	this.baseHeight = height;
	this.width  = width;
	this.height = height;
	this.text   = text;
	
	// Default options.
	this.style    = kStyle.checkbox;
	this.checked  = false;
}

// =====================================================================
// GET WIDTH OF CHECKBOX ITSELF
// =====================================================================

kCheckbox.prototype.checkboxWidth =
function (width, height)
{
	return (height < width) ? height : width;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kCheckbox.prototype.draw = 
function(canvas)
{
	// Get the checkbox width.
	var boxWidth = checkboxWidth(this.width, this.height);
	var padding  = this.style.padding;
	
	// Draw the box containing the tick.
	canvas.drawRoundedRectangle(this.x, this.y, this.height, 
		boxWidth, this.style.radius, this.style);
	
	// Draw the tick.
	if (this.checked == true) {
		canvas.drawLine(this.x + padding, this.y + padding, 
			boxWidth - 2 * padding, this.height - 2 * padding, 
			this.style);
		canvas.drawLine(this.x + boxWidth - padding, 
			this.y + padding, -boxWidth + 2 * padding, 
			this.height - 2 * padding, this.style);
	}
	
	// Draw the text.
	canvas.drawBoundedText(this.x + boxWidth + this.style.margin, 
		this.y, this.width - boxWidth - this.style.margin, 
		this.height, this.text, this.style);
}

// =====================================================================
// FIND MOUSE/KEYBOARD ACTIVE AREA
// =====================================================================

kCheckbox.prototype.getActiveArea = 
function()
{
	return {x: this.x, y: this.y, width: checkboxWidth(this.width, 
		this.height), height: this.height};
}

// =====================================================================
// MOUSE/KEYBOARD INTERACTION
// =====================================================================

kCheckbox.prototype.onPush = 
function(mouseX, mouseY)
{
	this.checked = !this.checked;
}

