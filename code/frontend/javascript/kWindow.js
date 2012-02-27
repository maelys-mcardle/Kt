// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWindow(kCanvasObject)
{
	// Load in the canvas from the caller.
	this.canvas = kCanvasObject;
	
	// Create an empty array to store the widgets.
	this.widgets = new Array();
	
	// Track the widget that has focus.
	this.widgetIndexWithFocus = -1;
	
	// Set the root layout to define the placement of the widgets.
	this.rootLayout = 0;
	
	// Initiate an event handler to grab mouse/keyboard input.
	this.eventHandler = new kEventHandler();
}

// =====================================================================
// RUN WINDOW EVENT LOOP
// =====================================================================

kWindow.prototype.run = 
function()
{
	// Send user interaction off to widgets.
	this.updateWidgets();
	
	// Draw the background and the widgets.
	this.drawWindow();

	// Update layouts.
	this.updateLayouts();
	
	// Wait before running the event loop again.
	kWindowInstance = this;
	setTimeout(function() { kWindowInstance.run(); }, 
		kGlobal.eventLoopDelay);
}

// =====================================================================
// SET/UPDATE WINDOW LAYOUT
// =====================================================================

kWindow.prototype.setLayout = 
function(kLayoutObject)
{
	this.rootLayout = kLayoutObject;
}

kWindow.prototype.updateLayouts = 
function()
{
	if (typeof this.rootLayout.updateLayout != "undefined")
		this.rootLayout.updateLayout(0, 0, this.canvas.canvas.width,
			this.canvas.canvas.height);
}

// =====================================================================
// ADD WIDGETS TO WINDOW
// =====================================================================

kWindow.prototype.addWidget = 
function(kWidgetObject)
{
	this.widgets.push(kWidgetObject);
}

// =====================================================================
// PASS UI INTERACTION TO WIDGET
// =====================================================================

kWindow.prototype.updateWidgets = 
function()
{
	// Get the events and the mouse position from the event handler.
	var events = this.eventHandler.getEvents();
	
	// Go event by event.
	while (events.length > 0) {
		
		// Grab the event from the queue.
		var event = events.shift();
		
		// Note which widget had focus last time.
		var lastWidgetWithFocus = this.widgetIndexWithFocus;
		
		// Reset the widget focus if this is a click event.
		if (event.event == kEvent.doubleclick || 
			event.event == kEvent.click)
			this.widgetIndexWithFocus = -1;
		
		// Go widget by widget and see if the event applies to it.
		for (var i = 0; i < this.widgets.length; i++) {
				
			// Get the mouse coordinates from the event, and the
			// active area for the mouse from the widget.
			var activeArea = typeof this.widgets[i]["getActiveArea"] !=
				"undefined" ? this.widgets[i].getActiveArea() : 0;
			mouseX = event.x;
			mouseY = event.y;
			
			// Widget is idle if mouse falls outside its active area or
			// has no active area defined to begin with.
			if (activeArea == 0 || 
				mouseX < activeArea.x || 
				mouseX > activeArea.x + activeArea.width || 
				mouseY < activeArea.y ||
				mouseY > activeArea.y + activeArea.height)
				this.callWidgetFunction(this.widgets[i], 
					"onIdle", [mouseX, mouseY]);
			
			// Handle events passed through.
			else if (event.event == kEvent.click) {
				this.callWidgetFunction(this.widgets[i], 
					"onClick", [mouseX, mouseY]);
				this.widgetIndexWithFocus = i;
			}
			
			else if (event.event == kEvent.doubleclick) {
				this.callWidgetFunction(this.widgets[i], 
					"onDoubleClick", [mouseX, mouseY]);
				this.widgetIndexWithFocus = i;
			}
			
			else if (event.event == kEvent.drag)
				this.callWidgetFunction(this.widgets[i], 
					"onDrag", [mouseX, mouseY, 
					event.dragX, event.dragY]);
			
			else if (event.event == kEvent.dragConclusion)
				this.callWidgetFunction(this.widgets[i], 
					"onDragConclude", [mouseX, mouseY, 
					event.dragX, event.dragY]);
			
			else if (event.event == kEvent.mouseUpdate)
				this.callWidgetFunction(this.widgets[i], 
					"onHover", [mouseX, mouseY]);
			
			else if (event.event == kEvent.push)
				this.callWidgetFunction(this.widgets[i], 
					"onPush", [mouseX, mouseY]);
			
			// Pass keypress events to the widget with focus.
			if (event.event == kEvent.keyPress && 
				i == this.widgetIndexWithFocus)
				this.callWidgetFunction(this.widgets[i],
					"onKey", [mouseX, mouseY, event.key]);
				
			// Send a special call to the widget with focus.
			if ((event.event == kEvent.click || event.event == 
				kEvent.doubleclick) && this.widgetIndexWithFocus == i)
				this.callWidgetFunction(this.widgets[i],
					"onFocus", [mouseX, mouseY]);
				
			// Send a special call to the widget that lost focus.
			if (lastWidgetWithFocus==i && this.widgetIndexWithFocus!=i)
				this.callWidgetFunction(this.widgets[i],
					"onBlur", [mouseX, mouseY]);
		}
	}
}

kWindow.prototype.callWidgetFunction = 
function(widget, method, arguments)
{
	// If the function is defined, call it.
	if (typeof widget[method] != "undefined")
		widget[method].apply(widget, arguments);
	
	// If the function callback is defined, call it.
	if (typeof widget[method + "Callback"] != "undefined")
		widget[method + "Callback"].apply(widget, arguments);
}

// =====================================================================
// DRAW WINDOW
// =====================================================================

kWindow.prototype.drawWindow = 
function()
{
	// Update the window properties, and set the background.
	this.canvas.setGeometry(window.innerWidth, window.innerHeight);
	this.canvas.drawBackground(kStyle.background);
	
	// Go widget by widget and draw it.
	for (var i = 0; i < this.widgets.length; i++)
		this.widgets[i].draw(this.canvas);
	
	// Render the canvas.
	this.canvas.render();
}