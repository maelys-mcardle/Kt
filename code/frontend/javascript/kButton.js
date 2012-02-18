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
	
	// Load defaults.
	this.style = kStyle.button;
	
	// Load callbacks: functions called when events occur.
	this.onClickCallback       = function() { };
	this.onDoubleClickCallback = function() { };
	this.onHoverCallback       = function() { };
	this.onIdleCallback        = function() { };
	this.onKeyCallback         = function() { };
	this.onDragCallback        = function() { };
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
	this.style = kStyle.button;
}

kButton.prototype.onHover = 
function(mouseX, mouseY)
{
	this.style = kStyle.buttonHover;
}

kButton.prototype.onClick = 
function(mouseX, mouseY)
{
	
}

kButton.prototype.onDoubleClick = 
function(mouseX, mouseY)
{
	this.onClick(mouseX, mouseY);
}

kButton.prototype.onDrag = 
function(startX, startY, endX, endY)
{
	return;
}

kButton.prototype.onKey = 
function(character)
{
	
}
