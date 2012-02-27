// =====================================================================
// STYLE DEFINITION
// =====================================================================

var kStyle = 
{
	// The default for all objects until initialized otherwise.
	default: {
		
		widthPolicy: kLayoutPolicy.dynamic,
		heightPolicy: kLayoutPolicy.static,
		
		padding: 10,
		margin: 10,
		radius: 5,
		
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
		
		gradientOrientation: kOrientation.horizontal
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
		textWrap: kWrap.wrapOnWords
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
		defaultWidth: 500,
		defaultHeight: 100,
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
	},
	
	layout: {
		widthPolicy: kLayoutPolicy.dynamic,
		heightPolicy: kLayoutPolicy.dynamic
	}
};

// =====================================================================
// LOAD DEFAULTS/PARENT VALUES INTO STYLE
// =====================================================================

function getStyle(style)
{
	// List the properties of the default style.
	var properties = Object.keys(kStyle.default);
	
	// For each property that we have, look at the style and see if
	// it has such a property. If it doesn't, see if its parents or
	// ancestors have such a property. If no one has it, use the 
	// default value.
	
	while (properties.length > 0) {
		
		// Get the property.
		var propertyName = properties.pop();
		
		// If the property is defined, go to the next.
		if (typeof style[propertyName] != "undefined")
			continue;
	
		// Cycle through the parents of this property.
		for (var parent = style.parent; typeof parent != "undefined";
			 parent = kStyle[parent].parent) {
			
			// If a parent has the property, use it.
			if (typeof kStyle[parent][propertyName] != "undefined") {
				style[propertyName] = kStyle[parent][propertyName];
				break;
			}
		}

		// If the property is still undefined, load the default.
		if (typeof style[propertyName] == "undefined")
			style[propertyName] = kStyle.default[propertyName];
	}
	
	return style;
}