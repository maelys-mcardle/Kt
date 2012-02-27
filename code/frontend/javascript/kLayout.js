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
	var horizontal = (this.orientation == kOrientation.horizontal);
	var availableSpace = (horizontal) ? maximumWidth : maximumHeight;
	var dynamicItems = 0;
	
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
			availableSpace -= item.style.margin*2;
		
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
		var margin = (typeof item.style.margin == "number") ?
			item.style.margin : 0;
		
		// Update the item position.
		item.x = xPosition + margin;
		item.y = yPosition + margin;
		
		// Resize the item to fit, and append the margin that's after
		// the item.
		if (horizontal) {
			item.width = (item.style.widthPolicy == 
				kLayoutPolicy.static)? item.baseWidth : dynamicItemSize;
			item.height = (item.style.heightPolicy == 
				kLayoutPolicy.static)? item.baseHeight : maximumHeight -
				2*margin;
			xPosition = margin + item.width + item.x;
		} else {
			item.width = (item.style.widthPolicy == 
				kLayoutPolicy.static)? item.baseWidth : maximumWidth - 
				2 * margin;
			item.height = (item.style.heightPolicy == 
				kLayoutPolicy.static)? item.baseHeight : dynamicItemSize;
			yPosition = margin + item.height + item.y;
		}
	}
}
