
function eventLoop(canvas)
{

	setTimeout(function(){eventLoop(canvas)}, 100);
}

function main(canvasId) 
{
	canvas = new kCanvas(canvasId);
	eventLoop(canvas);
}