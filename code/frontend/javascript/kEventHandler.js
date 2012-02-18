// =====================================================================
// BASE FUNCTION
// =====================================================================

function kEventHandler()
{
	// Create an empty array to store the events queue.
	this.events = new Array();
	
	// Add handlers to capture UI interactions.
	kEventHandlerInstance = this;
	window.addEventListener("mousemove", 
		function() {kEventHandlerInstance.appendEvent();}, false);
	window.addEventListener("click", 
		function() {kEventHandlerInstance.appendEvent();}, false);
	window.addEventListener("dblclick", 
		function() {kEventHandlerInstance.appendEvent();}, false);
	window.addEventListener("mousedown", 
		function() {kEventHandlerInstance.appendEvent();}, false);
	window.addEventListener("mouseup", 
		function() {kEventHandlerInstance.appendEvent();}, false);
	window.addEventListener("keydown", 
		function() {kEventHandlerInstance.appendEvent();}, false);
}

// =====================================================================
// PASS UI INTERACTION TO EVENT QUEUE
// =====================================================================

kEventHandler.prototype.appendEvent =
function()
{
	this.events.push(window.event);
}

// =====================================================================
// TRANSLATE EVENTS ON QUEUE AND RETURN THEM
// =====================================================================

kEventHandler.prototype.getEvents = 
function()
{
	return this.events;
}
