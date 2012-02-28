// =====================================================================
// BASE FUNCTION
// =====================================================================

function kEventHandler()
{
	// Create an empty array to store the events queue.
	this.events = new Array();
	
	// Variables to track mouse position.
	this.mouseX = 0;
	this.mouseY = 0;
	
	// Variables to allow for mouse drag detection.
	this.dragStartX = 0;
	this.dragStartY = 0;
	this.dragThresholdReached = false;
	this.dragMode = false;
	
	// Set the handler to capture UI interactions.
	var kEventHandlerInstance = this;
	var handler = function() { kEventHandlerInstance.appendEvent(); };
	
	// Add handlers to capture UI interactions.
	window.addEventListener("mousemove", handler);
	window.addEventListener("click",     handler);
	window.addEventListener("dblclick",  handler);
	window.addEventListener("mousedown", handler);
	window.addEventListener("mouseup",   handler);
	window.addEventListener("keydown",   handler);
}

// =====================================================================
// INTERPRET UI INTERACTION AND PASS TO QUEUE
// =====================================================================

kEventHandler.prototype.appendEvent =
function()
{
	// Mouse event. Capture coordinates.
	if (typeof window.event.offsetX != "undefined" &&
		window.event.offsetX > 0 && window.event.offsetY > 0) {
		this.mouseX = window.event.offsetX;
		this.mouseY = window.event.offsetY;
	}
	
	// The mouse moved.
	if (window.event.type == "mousemove") {
		
		// If we're in drag mode, determine if the drag threshold
		// has been reached.
		if (this.dragMode && !this.dragThresholdReached && 
			(Math.abs(this.mouseX - this.dragStartX) > 
			kGlobal.dragThreshold || Math.abs(this.mouseY - 
			this.dragStartY) > kGlobal.dragThreshold))
			this.dragThresholdReached = true;
	
		// If the drag threshold has been reached, this is a mouse drag.
		if (this.dragMode && this.dragThresholdReached)
			this.events.push({event: kEvent.drag, 
				x: this.dragStartX, y: this.dragStartY, 
				dragX: this.mouseX, dragY: this.mouseY});
			
		// Otherwise, this is a simple mouse move.
		else this.events.push({event: kEvent.mouseUpdate, 
			x: this.mouseX, y: this.mouseY});
	}
	
	// User clicked.
	else if (window.event.type == "click")
		this.events.push({event: kEvent.click, x: this.mouseX, 
			y: this.mouseY});
	
	// User double-clicked.
	else if (window.event.type == "doubleclick")
		this.events.push({event: kEvent.click, x: this.mouseX, 
			y: this.mouseY});
	
	// User pushed the mouse button down.
	else if (window.event.type == "mousedown") {
		
		// Go into drag mode. This means we'll check mouse positions
		// from now on.
		this.dragMode = true;
		this.dragThresholdReached = false;
		this.dragStartX = this.mouseX;
		this.dragStartY = this.mouseY;
		
		// Also send a push event.
		this.events.push({event: kEvent.push, x: this.mouseX, 
			y: this.mouseY});
	}
	
	// User released the mouse button.
	else if (window.event.type == "mouseup") {
		
		// Identify that we're now out of drag mode.
		this.dragMode = false;
		
		// If the threshold was reached, we were in drag mode.
		// Therefore, emit a drag conclusion event.
		if (this.dragThresholdReached)
			this.events.push({event: kEvent.dragConclusion, 
				x: this.dragStartX, y: this.dragStartY, 
				dragX: this.mouseX, dragY: this.mouseY});
			
		// Otherwise, we were in mouse move mode.
		else this.events.push({event: kEvent.mouseUpdate, 
			x: this.mouseX, y: this.mouseY});	
	}
	
	// User pressed a key on the keyboard.
	else if (window.event.type == "keydown") {
		
		// Get the character from the given keycode.
		var character = keyEventToChar(window.event);
		
		// If a character is defined by the keycode, create the event.
		if (typeof character != "undefined")
			this.events.push({event: kEvent.keyPress, x: this.mouseX, 
				y: this.mouseY, key: character});
	}
}

// =====================================================================
// RETURN EVENTS ON QUEUE
// =====================================================================

kEventHandler.prototype.getEvents = 
function()
{
	// Make a new array that we'll send out.
	var output = new Array();
	
	// Remove elements from the internal events array and push them
	// to our output. This approach prevents data loss.
	while (this.events.length > 0)
		output.push(this.events.shift());
	
	// Return the array.
	return output;
}
