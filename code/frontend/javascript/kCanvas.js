// =====================================================================
// BASE FUNCTION
// =====================================================================

function kCanvas()
{
	// Load in the canvas from the HTML5 DOM.
	this.canvas  = document.getElementById("surface");
	this.context = this.canvas.getContext("2d");
}

// =====================================================================
// CANVAS & CONTEXT MANAGEMENT
// =====================================================================

kCanvas.prototype.updateGeometry = 
function()
{
	this.width  = this.canvas.width  = window.innerWidth;
	this.height = this.canvas.height = window.innerHeight;
}

kCanvas.prototype.loadStyle = 
function(style)
{
	// Load in parameters defined by the style.
	this.context.strokeStyle = style.lineColour;
	this.context.lineWidth   = style.lineWidth;
	this.context.fillStyle   = style.fillColour;
	this.context.font        = style.textHeight + "px " + style.textFont;
	
	// Constants. The textBaseline means that the coordinates given
	// to define text location will always correspond to the top bound,
	// like all the other elements in here.
	this.context.textBaseline = "top";
}	

// =====================================================================
// DRAW BASIC PRIMITIVES
// =====================================================================

kCanvas.prototype.drawRectangle = 
function(x, y, width, height, style)
{
	// Load the style into the context.
	this.loadStyle(style);
	
	// If we have fill/line information, draw the rectangle.
	if (style.fillColour) this.context.fillRect(x, y, width, height);
	if (style.lineColour) this.context.strokeRect(x, y, width, height);
}

kCanvas.prototype.drawRoundedRectangle = 
function(x, y, width, height, radius, style)
{
	// Load the style information.
	this.loadStyle(style);
	
	// Path out the rounded rectangle.
	this.context.beginPath();
	this.context.moveTo(x + radius, y);
	this.context.lineTo(x + width - radius, y);
	this.context.quadraticCurveTo(x + width, y, x + width, y + radius);
	this.context.lineTo(x + width, y + height - radius);
	this.context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	this.context.lineTo(x + radius, y + height);
	this.context.quadraticCurveTo(x, y + height, x, y + height - radius);
	this.context.lineTo(x, y + radius);
	this.context.quadraticCurveTo(x, y, x + radius, y);
	this.context.closePath();
	
	// Draw the rounded rectangle.
	if (style.fillColour) this.context.fill();
	if (style.lineColour) this.context.stroke();
}

kCanvas.prototype.drawEllipse = 
function(x, y, width, height, style)
{
	// Load the style into the context.
	this.loadStyle(style);
	

}

kCanvas.prototype.drawLine = 
function(x, y, xDelta, yDelta, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Define the line.
	this.context.beginPath();
	this.context.moveTo(x, y);
	this.context.lineTo(x + xDelta, y + yDelta);
	this.context.closePath();
	
	// Draw the line.
	this.context.stroke();
}

kCanvas.prototype.drawLines = 
function(x, y, deltaCoordinates, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Start the line path and go to the start coordinates.
	this.context.beginPath();
	this.context.moveTo(x, y);
	
	// Go through each coordinate.
	for (var i = 0; i < deltaCoordinates.length; i++)
		this.context.lineTo(x + deltaCoordinates[i][0], 
			y + deltaCoordinates[i][1]);

	// End and draw the line.
	this.context.closePath();
	this.context.stroke();
}

kCanvas.prototype.drawPolygon = 
function(x, y, deltaCoordinates, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Start the line path and go to the start coordinates.
	this.context.beginPath();
	this.context.moveTo(x, y);
	
	// Go through each coordinate.
	for (var i = 0; i < deltaCoordinates.length; i++)
		this.context.lineTo(x + deltaCoordinates[i][0], 
			y + deltaCoordinates[i][1]);

	// End and draw the line.
	this.context.lineTo(x, y);
	this.context.closePath();

	// Draw the polygon.
	if (style.fillColour) this.context.fill();
	if (style.lineColour) this.context.stroke();
}

// =====================================================================
// DRAW COMPLEX PRIMITIVES (DEPEND ON BASIC PRIMITIVES)
// =====================================================================

kCanvas.prototype.drawBackground = 
function(style)
{
	// A background is just a rectangle that fills the screen. 
	this.drawRectangle(0, 0, this.canvas.width, 
		this.canvas.height, style);
}

// =====================================================================
// DRAW TEXT
// =====================================================================

kCanvas.prototype.drawText = 
function(x, y, text, style)
{
	// Load the style.
	this.loadStyle(style);
	
	// Display the text.
	this.context.fillText(text, x, y);
}

kCanvas.prototype.drawBoundedText = 
function(x, y, width, height, text, style)
{
	// Load the style.
	this.loadStyle(style);
	
	// Initialize the variables.
	var remainingText = text;
	var yPosition = y;
	var xPosition = x;

	// Go line by line, until we run out of text or no more text fits.
	while (yPosition + style.textHeight < y + height && 
		remainingText.length > 0) {
		
		// Get the characters to display.
		var line = this.fitTextToWidth(remainingText, width, style);
		remainingText = remainingText.slice(line.length);
	
		// Calculate the x position.
		var lineSize = this.context.measureText(line).width;
	
		// Align right or center. Default is align to the left.
		if (style.textAlign == kAlign.right)
			xPosition = x + width - lineSize;
		if (style.textAlign == kAlign.center)
			xPosition = x + (width - lineSize) / 2;
	
		// Place the characters.
		this.context.fillText(line, xPosition, yPosition);
		
		// Going to next line.
		yPosition += style.textHeight * style.textLineSpacing;
	}
	
	// Return the amount of displayed text.
	return text.length - remainingText.length;
}

kCanvas.prototype.fitTextToWidth = 
function(text, width, style)
{
	// Load the style.
	this.loadStyle(style);
	
	// Get the size of the text.
	var textSize = this.context.measureText(text).width;
	
	// Cut down the text until it fits.
	while (textSize > width) {
		
	}
	
	// If no wrapping is to be 
	return text;
}
