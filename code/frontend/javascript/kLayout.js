// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLayout(kWindowObject, policy)
{
	// Create an empty array to store the layout and widgets.
	this.items = new Array();
	
	// Store the parent & policy defined for this layout.
	this.policy = policy;
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
	var expandingItems = 0;
	
	// Go through each item to gather data.
	for (var i = 0; i < this.items.length; i++) {
		
		// Shortcut to the item.
		var item = this.items[i];
		
		if (item.style.widthPolicy == kLayoutPolicy.fixed) {
			
			if (typeof item.baseWidth == "number")
				availableSpace -= item.baseWidth;
		
		} else {
			expandingItems++;
		}
		
		if (typeof item.style.margin == "number")
			availableSpace -= item.style.margin;
		
	}
	
	var xPosition = x;
	var yPosition = y;
	var dynamicItemSize = availableSpace / expandingItems;
	
	for (var i = 0; i < this.items.length; i++) {
		
		// Shortcut to the item.
		var item = this.items[i];
		
		if (typeof item.style.margin == "number")
			xPosition += item.style.margin;
		
		item.x = xPosition;
		item.y = yPosition;
		
		if (item.style.widthPolicy == kLayoutPolicy.fixed) {
			item.width = item.baseWidth;
		} else {
			item.width = dynamicItemSize;
		}
		
		if (item.style.heightPolicy == kLayoutPolicy.fixed) {
			item.height = item.baseHeight;
		} else {
			item.height = maximumHeight;
		}
		
		xPosition += item.width;
		
		if (typeof item.style.margin == "number")
			xPosition += item.style.margin;
	}
}
