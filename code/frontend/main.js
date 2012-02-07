
var style = {
	"background" : "grey"
};

function surface()
{
	// Load in the canvas from the HTML5 DOM.
	this.canvas = document.getElementById("surface");
	this.context = this.canvas.getContext("2d");
	
	// Update canvas size to match the available surface area.
	// Update local properties.
	surface.prototype.update_geometry = function()
	{
		this.width  = this.canvas.width  = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;
	}
	
	// Draw a background.
	surface.prototype.draw_background = function(style)
	{
		this.draw_rectangle(0, 0, this.canvas.width, this.canvas.height, style, "");
	}
	
	// Draw a rectangle.
	surface.prototype.draw_rectangle = function(x, y, width, height, fill_style, stroke_style)
	{
		this.context.strokeStyle = stroke_style;
		this.context.fillStyle = fill_style;
		this.context.fillRect(x, y, width, height);
	}
	
}

function main() 
{
	canvas = new surface();
	canvas.update_geometry();
	canvas.draw_background(style["background"]);
}