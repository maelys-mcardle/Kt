function style() 
{
	this.red = "red";
}

function surface()
{
	this.canvas = document.getElementById("surface");
	this.context = this.canvas.getContext("2d");
	
	surface.prototype.update = function()
	{
		this.width = this.canvas.width = window.innerWidth;
		this.height = this.canvas.height = window.innerHeight;
	}
	
	surface.prototype.background = function(style)
	{
		this.rectangle(0, 0, this.canvas.width, this.canvas.height, style);
	}
	
	surface.prototype.rectangle = function(x, y, width, height, style)
	{
		this.context.fillStyle = style;
		this.context.fillRect(x, y, width, height);
	}
	
}


function main() 
{
	canvas = new surface();
	canvas.update();
	canvas.background("red");
}