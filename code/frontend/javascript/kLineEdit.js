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
	this.displayedTextOffset = 0;
	this.displayedTextData = 0;
	this.style = kStyle.lineEdit;
}

// =====================================================================
// DRAW FUNCTION
// =====================================================================

kLineEdit.prototype.draw = 
function(canvas)
{
	// Draw the box containing the text.
	canvas.drawRoundedRectangle(this.x, this.y, this.width, 
		this.height, 5, this.style);
	
	// Draw the text.
	this.displayedTextData = canvas.drawBoundedText(this.x + 
		this.style.padding, this.y, this.width - 2 * this.style.padding,
		this.height, this.text.slice(this.displayedTextOffset), 
		this.style);
	
	// Draw the cursor.
	
	
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
	// If we haven't acquired text geometry data, abort.
	if (this.displayedTextData == 0) return;
	
	// Find the offset that's the closest to the mouse.
	
	
}

kLineEdit.prototype.onClick = 
function(mouseX, mouseY)
{
	return;
}

kLineEdit.prototype.onKey = 
function(mouseX, mouseY, character)
{
	// User presses a key on the keyboard. Apply the action at the
	// given cursor position.
	
	// Ignore newlines.
	if (character == "\n") 
		return;
	
	// Increase / decrease cursor position with arrow keys.
	else if (character == kSpecialChar.rightArrow && 
		this.cursorPosition + 1 < this.text.length)
		this.cursorPosition++;
	
	else if (character == kSpecialChar.leftArrow && 
		this.cursorPosition - 1 >= 0)
		this.cursorPosition--;	
	
	// Backspace deletes the character before the cursor.
	else if (character == kSpecialChar.backspace && 
		this.cursorPosition > 0) {
		this.text = this.text.substring(0, this.cursorPosition-1) + 
			this.text.substring(this.cursorPosition);
		this.cursorPosition--;
	}
	
	// Delete removes the character after the cursor.
	else if (character == kSpecialChar.delete && 
		this.cursorPosition < this.text.length - 1) {
		this.text = this.text.substring(0, this.cursorPosition) + 
			this.text.substring(this.cursorPosition+1);
	}
	
	// All other special characters are ignored.
	if (character < 0) return;
		
	// Otherwise append the character.
	this.text = this.text.substring(0, this.cursorPosition) + 
		character + this.text.substring(this.cursorPosition);
	this.cursorPosition++;
}