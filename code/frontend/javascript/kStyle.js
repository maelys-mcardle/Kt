var kStyle = 
{
	// The default for all objects until initialized otherwise.
	default: {
		fillColour: "white",
		lineColour: "black",
		lineWidth: 1,
		opacity: 1,
		
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
	
	button: {
		fillColour: "black",
		lineColour: "white",
		lineWidth: 2,
		textFont: "Vegur",
		textColour: "white",
		textHeight: 20,
		textLineSpacing: 1.2,
		textAlign: kAlign.center + kAlign.middle,
		textWrap: kWrap.wrapOnWords,
	},
	
	buttonHover: {
		parent: "button", 
		fillColour: "#a0a0a0"
	},

	buttonPush: {
		parent: "button",
		fillColour: "red"
	},
	
	label: {
		textFont: "Vegur",
		textColour: "white",
		textHeight: 30,
		textLineSpacing: 1.2,
		textAlign: kAlign.left + kAlign.top,
		textWrap: kWrap.wrapOnWords
	}
};