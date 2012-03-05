// Global variables. Keep track of what operand the user chose,
// and what was the last stored value.
var operation = "";
var lastValue = 0;

// Called when the user pushes the +, -, * or / button.
function operatorTrigger(operator, screen)
{
	lastValue = parseFloat(screen.text);
	operation = operator;
	screen.text = "0";
}

// Called when the user wants the answer.
function calculate(screen)
{
	var currentValue = parseFloat(screen.text);
	var answer = 0;
	
	if (operation == "+")     
		answer = lastValue + currentValue;
	else if (operation == "-") 
		answer = lastValue - currentValue;
	else if (operation == "/") 
		answer = lastValue / currentValue;
	else if (operation == "*") 
		answer = lastValue * currentValue;
		
	screen.text = answer.toString();
}
