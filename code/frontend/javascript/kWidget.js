// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWidget(parent, widget, widgetParameters)
{	
	// The first argument of any widget is its X&Y coordinates. We'll
	// initialize this to zero.
	var widgetArguments = [0, 0];
		
	// Then we tack on whatever arguments are passed onto the widget
	// from the calling of this function. Usually width, height, label.
	for (var i = 2; i < arguments.length; i++)
		widgetArguments.push(arguments[i]);

	// Create the widget object.
	this.widget = new widget;
	widget.apply(this.widget, widgetArguments);
	
	// Add this widget to the parent.
	parent.addWidget(this.widget);
	return this.widget;
}

