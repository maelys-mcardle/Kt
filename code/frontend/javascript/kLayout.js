// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLayout(kWindowObject, orientation)
{
	// Create an empty array to store the layout and widgets.
	this.items = new Array();
	
	// Store the window & orientation defined for this layout.
	this.orientation = orientation;
	this.window = kWindowObject;
	
	// Get the style for the layout.
	this.style = getStyle(kStyle.layout);
}

// =====================================================================
// ADD WIDGETS TO LAYOUT
// =====================================================================

kLayout.prototype.addWidget = 
function(kWidgetObject)
{
	this.items.push(kWidgetObject);
	this.window.addWidget(kWidgetObject);
}

// =====================================================================
// ADD CHILDREN TO LAYOUT
// =====================================================================

kLayout.prototype.addLayout = 
function(kLayoutObject)
{
	this.items.push(kLayoutObject);
}

// =====================================================================
// UPDATE POSITION/SIZE OF ITEMS IN LAYOUT
// =====================================================================

kLayout.prototype.updateLayout = 
function(x, y, maximumWidth, maximumHeight)
{
	var availableSpace = maximumWidth;
	var dynamicItems = 0;
	var horizontal = (this.orientation == kOrientation.horizontal);
	
	// Go through each item to gather data.
	for (var i = 0; i < this.items.length; i++) {
		
		// Shortcut to the item.
		var item = this.items[i];
		
		// Get the policy & size, depending on what the target 
		// orientation is.
		var policy = (horizontal) ? item.style.widthPolicy : 
			item.style.heightPolicy;
		var size = (horizontal) ? item.baseWidth : item.baseHeight;
			
		// Track the space consumed by fixed-size widgets, and the 
		// number of dynamic items there are.
		if (policy == kLayoutPolicy.static && typeof size == "number")
			availableSpace -= size;
		else if (policy == kLayoutPolicy.dynamic)
			dynamicItems++;
		
		if (typeof item.style.margin == "number")
			availableSpace -= item.style.margin;
		
	}
	
	// Set the initial coordinates, as well as the size each dynamic
	// item will take.
	var xPosition = x;
	var yPosition = y;
	var dynamicItemSize = availableSpace / dynamicItems;
	
	// Go through all the items again, this time to set their position
	// and size.
	for (var i = 0; i < this.items.length; i++) {
		
		// Shortcut to the item.
		var item = this.items[i];
		
		// Include the margin before the item.
		if (horizontal && typeof item.style.margin == "number")
			xPosition += item.style.margin;
		if (!horizontal && typeof item.style.margin == "number")
			yPosition += item.style.margin;
		
		// Update the item position.
		item.x = xPosition;
		item.y = yPosition;
		
		// Resize the item to fit, and append the margin that's after
		// the item.
		if (horizontal) {
			item.width = (item.style.widthPolicy == 
				kLayoutPolicy.static)? item.baseWidth : dynamicItemSize;
			item.height = (item.style.heightPolicy == 
				kLayoutPolicy.static)? item.baseHeight : maximumHeight;
			xPosition += (typeof item.style.margin == "number") ? 
				item.style.margin + item.width : item.width;
		} else {
			item.width = (item.style.widthPolicy == 
				kLayoutPolicy.static)? item.baseWidth : maximumWidth;
			item.height = (item.style.heightPolicy == 
				kLayoutPolicy.static)? item.baseHeight : dynamicItemSize;
			yPosition += (typeof item.style.margin == "number") ? 
				item.style.margin + item.height : item.height;
		}
	}
}
