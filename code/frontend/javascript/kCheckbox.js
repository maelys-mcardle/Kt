// =====================================================================
// BASE FUNCTION
// =====================================================================

function kCheckbox(x, y, width, height, label)
{
	// Store the button properties from function parameters.
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height = height;
	this.label  = label;
	
	// Default options.
	this.style    = kStyle.checkbox;
	this.boxWidth = (this.height < this.width) ? this.height:this.width;
	this.checked  = false;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kCheckbox.prototype.draw = 
function(canvas)
{
	// Draw the box containing the tick.
	canvas.drawRoundedRectangle(this.x, this.y, this.height, 
		this.boxWidth, 5, this.style);
	
	// Draw the tick.
	if (this.checked == true) {
		var padding = this.style.padding;
		canvas.drawLine(this.x + padding, this.y + padding, 
			this.boxWidth - 2 * padding, this.height - 2 * padding, 
			this.style);
		canvas.drawLine(this.x + this.boxWidth - padding, 
			this.y + padding, -this.boxWidth + 2 * padding, 
			this.height - 2 * padding, this.style);
	}
	
	// Draw the text.
	canvas.drawBoundedText(this.x + this.boxWidth + this.style.margin, 
		this.y, this.width - this.boxWidth - this.style.margin, 
		this.height, this.label, this.style);
}

// =====================================================================
// FIND MOUSE/KEYBOARD ACTIVE AREA
// =====================================================================

kCheckbox.prototype.getActiveArea = 
function()
{
	return {x:this.x,y:this.y,width:this.boxWidth,height:this.height};
}

// =====================================================================
// MOUSE/KEYBOARD INTERACTION
// =====================================================================

kCheckbox.prototype.onClick = 
function(mouseX, mouseY)
{
	this.checked = !this.checked;
}

