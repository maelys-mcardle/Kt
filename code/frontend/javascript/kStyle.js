var kStyle = 
{
	// The default for all objects until initialized otherwise.
	default: {
		fillColour: "white",
		lineColour: "black",
		lineWidth: 1,
		
		shadowColour: "black",
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		shadowBlur: 0,
		
		textFont: "Vegur",
		textColour: "white",
		textHeight: 50,
		textLineSpacing: 1.2,
		textAlign: kAlign.left,
		textWrap: kWrap.wrapOnWords,
		
		imagePolicy: kImage.stretch,
		
		gradientOrientation: kGradient.horizontal
	},
	
	background: {
		fillColour: "#212121"
	},
	
	rectangle: {
		lineWidth: 2,
		shadowColour: "white",
		shadowBlur: 5,
		shadowOffsetX: 2,
		shadowOffsetY: 2
	},
	
	text: {
		textFont: "Vegur",
		textColour: "white",
		textHeight: 50,
		textLineSpacing: 1.2,
		textAlign: kAlign.center,
		textWrap: kWrap.noWrap
	},
	
	image: {
		imagePolicy: kImage.tile
	},
};