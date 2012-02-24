// =====================================================================
// BASE FUNCTION
// =====================================================================

function kLayout(policy)
{
	// Create an empty array to store the layout and widgets.
	this.items = new Array();
	
	// Store the policy defined for this layout.
	this.policy = policy;
}

// =====================================================================
// ADD WIDGETS TO LAYOUT
// =====================================================================

kLayout.prototype.addWidget = 
function(kWidgetObject)
{
	this.items.push([kLayoutType.widget, kWidgetObject]);
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
// CALCULATE SIZE OF LAYOUT
// =====================================================================
