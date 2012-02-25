// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWidget(parent, widget, style)
{
	// Generate the arguments to pass onto the function. Every parameter
	// used in calling the kWidget function after the mandatory parent
	// and widget identifier is considered a parameter of that widget.
	var argumentList = [0, 0, 200, 200];
	for (var i = 2; i < arguments.length; i++)
		argumentList.push(arguments[i]);

	// Create the widget to maintain.
	this.widget = new widget;
	widget.apply(this.widget, argumentList);
	
	// Add this widget to the parent.
	parent.addWidget(this.widget);
	return this.widget;
}