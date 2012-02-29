// =====================================================================
// FUNCTION TO LOAD FUNCTION PARAMETERS
// =====================================================================

function optionalParameter(defaultValue, functionParameter)
{
	// If the functional parameter is defined, we return it. Otherwise,
	// we return a default value.
	
	if (typeof functionParameter != "undefined")
		return functionParameter;
	return defaultValue;
}