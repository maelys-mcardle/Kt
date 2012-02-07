 
function main() {
	var canvas = document.getElementById( 'surface' );
	var context = canvas.getContext( '2d' );

	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;
	context.fillStyle = "red";
	context.fillRect(0,0,canvas.width,canvas.height);
}