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
	var xPosition = x;
	var yPosition = y;
	
	// Go through each item to gather data.
	for (var i = 0; i < this.items.length; i++) {
		
		// Shortcut to the item.
		var item = this.items[i];
		
		// If the item is a layout, count it as a dynamically sized
		// item and go to the next.
		if (typeof item.updateLayout != "undefined") {
			dynamicItems++;
			continue;
		}
		
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
			availableSpace -= item.style.margin * 2;
	}
	
	// Define how many pixels each dynamically-sized item will take.
	var dynamicItemSize = (availableSpace > 0 && dynamicItems > 0) ? 
		availableSpace / dynamicItems : 0;
	
	// Go through all the items again, this time to set their position
	// and size.
	for (var i = 0; i < this.items.length; i++) {
		
		// Shortcut to the item.
		var item = this.items[i];
		
		// If the item is a layout, count it as a dynamically sized
		// item and go to the next.
		if (typeof item.updateLayout != "undefined") {
			
			// Determine the width/height of the child layout.
			var width = (horizontal) ? dynamicItemSize : maximumWidth;
			var height = (horizontal) ? maximumHeight : dynamicItemSize;
			
			// Update the child layout.
			item.updateLayout(xPosition, yPosition, width, height);
			
			// Increment the position and go to the next item.
			xPosition += (horizontal) ? width : 0;
			yPosition += (horizontal) ? 0 : height;
			continue;
		}
		
		// Get the item margin.
		var margin = (typeof item.style.margin == "number") ?
			item.style.margin : 0;
		
		// Update the item position.
		item.x = xPosition + margin;
		item.y = yPosition + margin;
		
		// Resize the item to fit (items placed horizontally.)
		if (horizontal) {
			item.width = (item.style.widthPolicy == 
				kLayoutPolicy.static)? item.baseWidth : dynamicItemSize;
			item.height = (item.style.heightPolicy == 
				kLayoutPolicy.static)? item.baseHeight : maximumHeight -
				2*margin;
			xPosition = margin + item.width + item.x;
			
		// Resize the item to fit (items placed vertically.)
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
