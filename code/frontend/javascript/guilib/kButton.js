// =====================================================================
// BASE FUNCTION
// =====================================================================

function kButton(x, y, width, height, text)
{
	// Store the properties from function parameters.
	this.x = x;
	this.y = y;
	this.baseWidth  = width;
	this.baseHeight = height;
	this.width  = width;
	this.height = height;
	this.text   = text;
	
	// Default style.
	this.style = getStyle(kStyle.button);
	
	// Style for different object states.
	this.styleIdle  = getStyle(kStyle.button);
	this.styleHover = getStyle(kStyle.buttonHover);
	this.stylePush  = getStyle(kStyle.buttonPush);
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kButton.prototype.draw = 
function(canvas)
{
	canvas.drawRoundedRectangle(this.x, this.y, this.width,
		this.height, this.style.radius, this.style);
	
	canvas.drawBoundedText(this.x, this.y, this.width, 
		this.height, this.text, this.style);
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
