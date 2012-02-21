// =====================================================================
// BASE FUNCTION
// =====================================================================

function kButton(x, y, width, height, label)
{
	// Store the button properties from function parameters.
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height = height;
	this.label  = label;
	
	// Default style.
	this.style = kStyle.button;
	
	// Style for different object states.
	this.styleIdle  = kStyle.button;
	this.styleHover = kStyle.buttonHover;
	this.stylePush  = kStyle.buttonPush;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kButton.prototype.draw = 
function(canvas)
{
	canvas.drawRoundedRectangle(this.x, this.y, this.width, 
		this.height, 5, this.style);
	
	canvas.drawBoundedText(this.x, this.y, this.width, 
		this.height, this.label, this.style);
}

// =====================================================================
// FIND MOUSE/KEYBOARD ACTIVE AREA
// =====================================================================

kButton.prototype.getActiveArea = 
function()
{
	return { x:this.x, y:this.y, width:this.width, height:this.height };
}

// =====================================================================
// MOUSE/KEYBOARD INTERACTION
// =====================================================================

kButton.prototype.onIdle = 
function(mouseX, mouseY)
{
	this.style = this.styleIdle;
}

kButton.prototype.onHover = 
function(mouseX, mouseY)
{
	this.style = this.styleHover;
}

kButton.prototype.onPush = 
function(mouseX, mouseY)
{
	this.style = this.stylePush;
}

kButton.prototype.onClick = 
function(mouseX, mouseY)
{
	return;
}
