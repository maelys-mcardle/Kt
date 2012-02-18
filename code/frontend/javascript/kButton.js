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
// FIND MOUSE/KEYBOARD ACTIVE AREA
// =====================================================================

kButton.prototype.getActiveArea = 
function()
{
	return { x:this.x, y:this.y, width:this.width, height:this.height };
}

// =====================================================================
// SET CALLBACK FUNCTION
// =====================================================================

kButton.prototype.setCallback = 
function(trigger, callbackFunction)
{
	
}

// =====================================================================
// MOUSE/KEYBOARD INTERACTION
// =====================================================================

kButton.prototype.onHover = 
function(mouseX, mouseY)
{
	
}

kButton.prototype.onClick = 
function(mouseX, mouseY)
{
	
}

kButton.prototype.onDoubleClick = 
function(mouseX, mouseY)
{
	
}

kButton.prototype.onDrag = 
function(startX, startY, endX, endY)
{
	
}

kButton.prototype.onKey = 
function(character)
{
	
}
