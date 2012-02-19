// =====================================================================
// BASE FUNCTION
// =====================================================================

function kWindow(kCanvasObject)
{
	// Load in the canvas from the caller.
	this.canvas = kCanvasObject;
	
	// Create an empty array to store the widgets.
	this.widgets = new Array();
	
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
	
	// Wait before running the event loop again.
	kWindowInstance = this;
	setTimeout(function() { kWindowInstance.run(); }, 
		kGlobal.eventLoopDelay);
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
	var mouseX = this.eventHandler.mouseX;
	var mouseY = this.eventHandler.mouseY;
	
	// Go event by event.
	while (events.length > 0) {
		
		// Grab the event from the queue.
		var event = events.shift();
		
		// Go widget by widget and see if the event applies to it.
		for (var i = 0; i < this.widgets.length; i++) {
			
			// Get the mouse coordinates from the event, and the
			// active area for the mouse from the widget.
			var activeArea = this.widgets[i].getActiveArea();
			mouseX = event.x;
			mouseY = event.y;
			
			// Widget is idle if mouse falls outside its active area.
			if (mouseX < activeArea.x || mouseX > activeArea.x +
				activeArea.width || mouseY < activeArea.y ||
				mouseY > activeArea.y + activeArea.height) {
				this.widgets[i].onIdle(mouseX, mouseY);
				this.widgets[i].onIdleCallback(event);
			} 
			
			// Handle events passed through.
			else if (event.event == kEvent.click) {
				this.widgets[i].onClick(mouseX, mouseY);
				this.widgets[i].onClickCallback(event);
			} 
			
			else if (event.event == kEvent.doubleclick) {
				this.widgets[i].onDoubleClick(mouseX, mouseY);
				this.widgets[i].onDoubleClickCallback(event);
			} 
			
			else if (event.event == kEvent.drag) {
				this.widgets[i].onDrag(event.startX, event.startY, 
					mouseX, mouseY);
				this.widgets[i].onDragCallback(event);
			} 
			
			else if (event.event == kEvent.dragConclusion) {
				this.widgets[i].onDragConclude(event.startX,
					event.startY, mouseX, mouseY);
				this.widgets[i].onDragConcludeCallback(event);
			} 
			
			else if (event.event == kEvent.mouseMove) {
				this.widgets[i].onHover(mouseX, mouseY);
				this.widgets[i].onHoverCallback(event);
			}
			
			else if (event.event == kEvent.keyPress) {
				this.widgets[i].onKey(mouseX, mouseY, event.key);
				this.widgets[i].onKeyCallback(event);
			}
			
		}
	}
		
	
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