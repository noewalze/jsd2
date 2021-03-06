
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

// Pythagorean theorem - defining `calcLongestSide`
function calcLongestSide(valueA, valueB){
	return Math.sqrt ((valueA*valueA) + (valueB*valueB));
}

// Radius to circumference - defining `calcCircumference`
function calcCircumference(rvalue){
	return (2 * Math.PI * rvalue);
}

// Fahrenheit to celsius - defining `calcFahrenheitToCelsius`
function calcFahrenheitToCelcius(tempFvalue){
	return ((tempFvalue - 32) * (5/9));
}

// Celsius to Fahrenheit - defining `calcCelsiusToFahrenheit`
function calcCelciusToFarenheit(tempCvalue){
	return ((tempCvalue * (9/5)) + 32);
}
