// =====================================================================
// BASE FUNCTION
// =====================================================================

function kSocket(path)
{
	// Array to store data in.
	this.receivedData = new Array();
	
	// Establish the connection to the socket.
	this.socket = new WebSocket(path);
	
	// Create handler for when data is received asynchronously.
	var kSocketInstance = this;
	this.socket.onmessage = function(event) { 
		kSocketInstance.appendData(event.data);
	};
}

// =====================================================================
// ASYNCHRONOUS RECEIVED DATA COLLECTION
// =====================================================================

kSocket.prototype.appendData = 
function(data)
{
	// If there's too much data in the buffer, clear the old data.
	if (this.receivedData.length > kIpcSettings.maximumSocketBufferSize)
		this.receivedData.shift();
	
	// Add the data to the buffer.
	this.receivedData.push(data);
}

// =====================================================================
// SEND/RECEIVE DATA
// =====================================================================

kSocket.prototype.send =
function(data)
{
	this.socket.send(data);
}

kSocket.prototype.receive =
function()
{
	// Return all the data that was stored.	
	var output;
	while (this.receivedData.length > 0)
		output += this.receivedData.shift();
	return output;
}

// =====================================================================
// CLOSE SOCKET
// =====================================================================

kSocket.prototype.close =
function()
{
	this.socket.close();
}
