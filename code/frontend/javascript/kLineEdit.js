// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLineEdit(x, y, width, height, text)
{
	// Store the button properties from function parameters.
	this.x = x;
	this.y = y;
	this.width  = width;
	this.height = height;
	this.text   = text;
	
	// Default options.
	this.cursorPosition = 0;
	this.style = kStyle.lineEdit;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kLineEdit.prototype.draw = 
function(canvas)
{
	canvas.drawRoundedRectangle(this.x, this.y, this.width, 
		this.height, 5, this.style);
	
	canvas.drawBoundedText(this.x + this.style.padding, this.y, 
		this.width - 2 * this.style.padding, this.height, this.text, 
		this.style);
}

// =====================================================================
// FIND MOUSE/KEYBOARD ACTIVE AREA
// =====================================================================

kLineEdit.prototype.getActiveArea = 
function()
{
	return { x:this.x, y:this.y, width:this.width, height:this.height };
}

// =====================================================================
// MOUSE/KEYBOARD INTERACTION
// =====================================================================

kLineEdit.prototype.onIdle = 
function(mouseX, mouseY)
{
	return;
}

kLineEdit.prototype.onHover = 
function(mouseX, mouseY)
{
	return;
}

kLineEdit.prototype.onPush = 
function(mouseX, mouseY)
{
	return;
}

kLineEdit.prototype.onClick = 
function(mouseX, mouseY)
{
	return;
}

kLineEdit.prototype.onKey = 
function(mouseX, mouseY, character)
{
	return;
}