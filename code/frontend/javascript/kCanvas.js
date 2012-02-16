// =====================================================================
// BASE FUNCTION
// =====================================================================

function kCanvas(canvasElementId)
{
	// Load in the canvas from the HTML5 DOM.
	this.canvas = document.getElementById(canvasElementId);
	
	// Create the frame buffer and the context to access it.
	this.buffer  = document.createElement("canvas");
	this.context = this.buffer.getContext("2d");
	
	// Set the initial properties of the frame buffer.
	this.buffer.width  = this.canvas.width;
	this.buffer.height = this.canvas.height;
}

// =====================================================================
// CANVAS MANAGEMENT
// =====================================================================

kCanvas.prototype.setGeometry = 
function(width, height)
{
	this.canvas.width  = this.buffer.width  = width;
	this.canvas.height = this.buffer.height = height;
}

kCanvas.prototype.getGeometry = 
function()
{
	return {
		width:  this.canvas.height, 
		height: this.canvas.height
	};
}

kCanvas.prototype.clear = 
function()
{
	// Clear the contents of the screen, and push a render.
	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	this.render();
}

kCanvas.prototype.render =
function()
{
	// Copy the contents of the frame buffer into the visible canvas.
	this.canvas.getContext("2d").drawImage(this.buffer, 0, 0);
}

// =====================================================================
// LOAD STYLE OPTIONS INTO CONTEXT
// =====================================================================

kCanvas.prototype.loadStyle = 
function(style)
{
	// Load in defaults into uninitialized properties.
	this.initializeStyle(style);
	
	// Load in properties defined by the style.
	this.context.strokeStyle = style.lineColour;
	this.context.lineWidth   = style.lineWidth;
	this.context.fillStyle   = style.fillColour;
	this.context.font        = style.textHeight + "px " + style.textFont;
	this.context.shadowColor = style.shadowColour;
	this.context.shadowBlur  = style.shadowBlur;
	this.context.shadowOffsetX = style.shadowOffsetX;
	this.context.shadowOffsetY = style.shadowOffsetY;
	
	// Constants. The textBaseline means that the coordinates given
	// to define text location will always correspond to the top bound,
	// like all the other elements in here.
	this.context.textBaseline = "top";
}

kCanvas.prototype.initializeStyle = 
function(style)
{
	// List the properties of the default style.
	var properties = Object.keys(kStyle.default);
	
	// For each property that we have, look at the style and see if
	// it has such a property. If it doesn't, populate it with the
	// default value.
	while (properties.length > 0) {
		var propertyName = properties.pop();
		if (typeof style[propertyName] === "undefined")
			style[propertyName] = kStyle.default[propertyName];
	}
}

// =====================================================================
// INSERT A GRADIENT INTO A STYLE
// =====================================================================

kCanvas.prototype.setStyleGradient = 
function(x, y, width, height, startColour, endColour, style, property)
{
	// Load the style into the context.
	this.loadStyle(style);
	
	// Create the gradient.
	var gradient = (style.gradientOrientation == kGradient.horizontal) ?
		this.context.createLinearGradient(x, y, x + width, y):
		this.context.createLinearGradient(x, y, x, y + height);
	
	// Add the stops and return the gradient.
	gradient.addColorStop(0, startColour);
	gradient.addColorStop(1, endColour);
	
	// Update the object property with the gradient.
	style[property] = gradient;
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
	this.context.quadraticCurveTo(x + width, y + height, 
		x + width - radius, y + height);
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
	
	// Path out the ellipse.
	this.context.beginPath();
	this.context.moveTo(x, y + height / 2);
	this.context.bezierCurveTo(x, y, x + width, y, 
		x + width, y + height / 2);
	this.context.bezierCurveTo(x + width, y + height, x, y + height, 
		x, y + height / 2);
	this.context.closePath();
	
	// Draw the ellipse.
	if (style.fillColour) this.context.fill();
	if (style.lineColour) this.context.stroke();
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
// DRAW IMAGE
// =====================================================================

kCanvas.prototype.drawImage = 
function(x, y, filepath, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Load the image in.
	var image = new Image();
	image.src = filepath;
	
	// Draw the image.
	this.context.drawImage(image, x, y);
}

// =====================================================================
// DRAW IMAGE WITHIN GIVEN BOUNDARIES
// =====================================================================

kCanvas.prototype.drawBoundedImage = 
function(x, y, width, height, filepath, style)
{
	// Load the style data.
	this.loadStyle(style);
	
	// Load the image in.
	var image = new Image();
	image.src = filepath;
	
	// Draw the image in fill mode. The image fills the given width and
	// height. Aspect ratio is not preserved.
	if (style.imagePolicy == kImage.fill)
		this.context.drawImage(image, x, y, width, height);
	
	// Draw the image in native mode. If the width and height are
	// smaller than the image dimensions, clip the image. If they're
	// bigger, keep the image at its original size.
	else if (style.imagePolicy == kImage.native) 
		this.context.drawImage(image, 0, 0,
			image.width < width ? image.width : width,
			image.height < height ? image.height : height,
			x, y,
			image.width < width ? image.width : width,
			image.height < height ? image.height : height);
		
	// Draw the image in stretch mode. Its contents are resized to
	// maximize real estate within the boundaries specified, whilst
	// keeping the aspect ratio.
	else if (style.imagePolicy == kImage.stretch)
		this.context.drawImage(image, x, y,
			(width / height) < (image.width / image.height) ? 
				width : (height / image.height) * image.width, 
			(width / height) < (image.width / image.height) ? 
				(width / image.width) * image.height : height);
		
	// Draw the image in tile mode. Its contents are repeated
	// vertically and horizontally within the bounds specified.
	else if (style.imagePolicy == kImage.tile) {
		
		// Generate the pattern - the tiled images.
		pattern = this.context.createPattern(image, "repeat");
		
		// We use translation functions so that the pattern aligns
		// with the start coordinates.
		this.context.translate(x, y);
		
		// Draw the image.
		this.context.fillStyle = pattern;
		this.context.fillRect(0, 0, width, height);
		
		// Restore the translation back.
		this.context.translate(-x, -y);
	}	
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
	this.context.fillStyle = style.textColour;
	this.context.fillText(text, x, y);
}

// =====================================================================
// DRAW TEXT WITHIN GIVEN BOUNDARIES
// =====================================================================

kCanvas.prototype.drawBoundedText = 
function(x, y, width, height, text, style)
{
	// Load the style.
	this.loadStyle(style);
	
	// Initialize the variables.
	var remainingText = text.substring(0);
	var textGeometry = new Array();
	var yPosition = y;
	var xPosition = x;
	var line = "";

	// Go line by line, until we run out of text or no more text fits.
	while (yPosition + style.textHeight < y + height && 
		remainingText.length > 0) {
		
		// Get the characters to display.
		wrapReturn = this.wrapTextToWidth(remainingText, width, style);
		line          = wrapReturn.phrase;
		remainingText = wrapReturn.remainingText;
		
		// Calculate the x position.
		var lineSize = this.context.measureText(line).width;
	
		// Align right or center. Default is align to the left.
		if (style.textAlign == kAlign.right)
			xPosition = x + width - lineSize;
		if (style.textAlign == kAlign.center)
			xPosition = x + (width - lineSize) / 2;
		
		// Get the geometry of the characters.
		textGeometry.push(this.getTextGeometry(xPosition, 
			yPosition, line, style));
	
		// Place the characters.
		this.drawText(xPosition, yPosition, line, style);
		
		// Going to next line.
		yPosition += style.textHeight * style.textLineSpacing;
	}
	
	// Return the amount of displayed text and its positions.
	return {
		visibleCharacters: text.length - remainingText.length, 
		geometry: textGeometry
	};
}

// =====================================================================
// TEXT HELPER FUNCTIONS
// =====================================================================

kCanvas.prototype.wrapTextToWidth = 
function(text, width, style)
{
	// Wrap on Characters:
	//  The line contains as many characters as can be fit within the
	//  width specified. A newline character is part of the output, and
	//  becomes its last character.
	//
	// Wrap on Words:
	//  The line contains as many words as can be fit within the width
	//  specified. There is an exception for the first word, whereby if
	//  its width exceeds the width allocated, it is wrapped by
	//  characters instead. The width of a word includes a single 
	//  whitespace character that follows it.
	//
	// No Wrap:
	//  Same as wrap on characters, but the next line starts with the
	//  first character after a newline.
	
	// Load the style.
	this.loadStyle(style);
	
	// Initialize variables.
	var phrase = "";
	var nextPiece = "";
	var firstWord = true;
	var remainingText;
	
	// Cut down the text until it fits.
	for (var position = 0; position < text.length; position++) {
		
		// Grab the next character.
		var character = text.charAt(position);
		nextPiece += character;
		
		// Detect whitespace.
		var whitespace = (character == " " || character == "\t");
		if (whitespace) firstWord = false;
		
		// Grab more for the next piece (wrap-style: word).
		// Exception: the first word is longer than the width of the
		// entire allocated space.
		if (style.textWrap == kWrap.wrapOnWords && !whitespace && 
			!firstWord)
			continue;
		
		// If the width of the phrase with this new addition exceeds
		// the allocated width for it, we're done.
		if (this.context.measureText(phrase + nextPiece).width > width)
			break;
		
		// Otherwise, append the next piece to the phrase.
		phrase += nextPiece;
		nextPiece = "";
		
		// Newline. We're done.
		if (character == "\n") break;
	}
	
	// Deal with any text remaining in the buffer.
	if (this.context.measureText(phrase + nextPiece).width < width)
		phrase += nextPiece;
	
	// No wrapping: the remaining text starts after the first newline.
	if (style.textWrap == kWrap.noWrap) {
		
		// Get the position of the first newline.
		var newlinePosition = text.indexOf("\n");
		
		// No newline found. All text exhausted.
		if (newlinePosition < 0)
			remainingText = "";
		
		// Newline found outside our wrapped line. Return what follows.
		if (newlinePosition >= phrase.length)
			remainingText = text.substring(newlinePosition + 1);
	}
	
	// Wrap on character or newline: the remaining text starts after the
	// current content.
	else remainingText = text.substring(phrase.length);
	
	// Return the wrapped phrase.
	return {
		phrase: phrase,
		remainingText: remainingText
	};
}

kCanvas.prototype.getTextGeometry = 
function(x, y, text, style)
{
	// Load the style.
	this.loadStyle(style);
	
	// Setup variables.
	var geometry = new Array();
	var xPosition = x;
	
	// Go character by character.
	for (var position = 0; position < text.length; position++) {
		
		// Get the character.
		var char = text.charAt(position);
		
		// If the character is a newline, abort.
		if (char == "\n") break;
		
		// Get the width of the character.
		var width = this.context.measureText(char).width;
		
		// Put together the position/size properties of the character.
		geometry.push([char, xPosition, y, width, style.textHeight]);
		
		// Keep track of our position.
		xPosition += width;
	}
	
	// Return the geometric properties of each character.
	return geometry;
}
