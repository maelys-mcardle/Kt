var kStyle = 
{
	// The default for all objects until initialized otherwise.
	default: {
		fillColour: "white",
		lineColour: "black",
		lineWidth: 1,
		
		textFont: "Vegur",
		textColour: "white",
		textHeight: 50,
		textLineSpacing: 1.2,
		textAlign: kAlign.left,
		textWrap: kWrap.wrapOnWords,
		
		imageExpand: kImage.stretchToFit,
		imageScale: 1.5,
		imageRotation: 0
	},
	
	background: {
		fillColour: "#212121"
	},
	
	rectangle: {
		lineWidth: 2
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
		imageExpand: kImage.native,
		imageScale: 1.5,
		imageRotation: 0
	},
};