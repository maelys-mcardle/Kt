// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWidget(parent, widget)
{
	// Load the style.
	var style = kStyle.widget;
	initializeStyle(style);
	
	// Generate the arguments to pass onto the function. Every parameter
	// used in calling the kWidget function after the mandatory parent
	// and widget identifier is considered a parameter of that widget.
	var argumentList = [0, 0, style.defaultWidth, style.defaultHeight];
	for (var i = 2; i < arguments.length; i++)
		argumentList.push(arguments[i]);

	// Create the widget to maintain.
	this.widget = new widget;
	widget.apply(this.widget, argumentList);
	
	// Set parameters related to the widget geometry.
	this.layoutPolicy  = style.layoutPolicy;
	this.maximumWidth  = style.defaultMaximumWidth;
	this.maximumHeight = style.defaultMaximumHeight; 
	
	// Add this widget to the parent.
	parent.addWidget(this.widget);
	return this.widget;
}