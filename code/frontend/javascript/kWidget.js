// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWidget(widget, parent, policy, width, height, maxWidth, maxHeight,
	widgetParameters)
{
	// Generate the arguments to pass onto the function.
	var argumentList = new Array();
	for (var i = 1; i < arguments.length; i++)
		argumentList.push(arguments[i]);

	// Create the widget to maintain.
	this.widget = new widget;
	widget.apply(this.widget, argumentList);
	
	
	this.widget.x = 200;
	
	return this.widget;
}