var kStyle = 
{
	// The default for all objects until initialized otherwise.
	default: {
		fillColour: "white",
		lineColour: "black",
		lineWidth: 1,
		lineEnd: "butt",
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
		
		imagePolicy: kImagePolicy.stretch,
		imageAlign: kAlign.left + kAlign.top,
		
		gradientOrientation: kGradient.horizontal,
		
		padding: 10,
		margin: 10
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
		fillColour: "#2A2A2A"
	},

	buttonPush: {
		parent: "button",
		fillColour: "#4A4A4A"
	},
	
	label: {
		textFont: "Vegur",
		textColour: "white",
		textHeight: 30,
		textLineSpacing: 1.2,
		textAlign: kAlign.left + kAlign.top,
		textWrap: kWrap.wrapOnWords
	},
	
	lineEdit: {
		fillColour: "white",
		lineColour: "black",
		lineWidth: 2,
		textFont: "Vegur",
		textColour: "black",
		textHeight: 20,
		textLineSpacing: 1.2,
		textAlign: kAlign.left + kAlign.middle,
		textWrap: kWrap.noWrap,
		padding: 10
	},
	
	textCursor: {
		lineColour: "grey",
		lineWidth: 1
	},
	
	textCursorHint: {
		parent: "textCursor",
		lineColour: "grey"
	},
	
	checkbox: {
		fillColour: "black",
		lineColour: "white",
		lineWidth: 2,
		lineEnd: "round",
		textFont: "Vegur",
		textColour: "white",
		textHeight: 20,
		textLineSpacing: 1.2,
		textAlign: kAlign.left + kAlign.middle,
		textWrap: kWrap.noWrap,
		padding: 5
	},
	
	image: {
		imagePolicy: kImagePolicy.stretch,
		imageAlign: kAlign.center + kAlign.top
	}
};