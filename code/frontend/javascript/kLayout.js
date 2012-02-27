// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLayout(window, policy)
{
	// Create an empty array to store the layout and widgets.
	this.items = new Array();
	
	// Store the parent & policy defined for this layout.
	this.policy = policy;
	this.window = window;
}

// =====================================================================
// ADD WIDGETS TO LAYOUT
// =====================================================================

kLayout.prototype.addWidget = 
function(kWidgetObject)
{
	this.items.push([kLayoutType.widget, kWidgetObject]);
	this.window.addWidget(kWidgetObject);
}

// =====================================================================
// ADD CHILDREN TO LAYOUT
// =====================================================================

kLayout.prototype.addLayout = 
function(kLayoutObject)
{
	this.items.push([kLayoutType.layout, kLayoutObject]);
}

// =====================================================================
// UPDATE POSITION/SIZE OF ITEMS IN LAYOUT
// =====================================================================

kLayout.prototype.updateContentGeometry = 
function(maximumWidth, maximumHeight)
{
	
	
}
