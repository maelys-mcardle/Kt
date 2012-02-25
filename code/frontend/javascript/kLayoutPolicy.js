const kLayoutPolicy = 
{
	// No maximum width/height during expansion. Cannot be
	// a positive number, as those are reserved for actual
	// width/height values.
	noMaximum: -1,
	
	// Whether to expand horizontally or vertically.
	horizontal: 0,
	vertical:   1,
	
	// Whether to allow the widget to expand, or keep it static.
	expand: 2,
	fixed: 3
};