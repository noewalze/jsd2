//var food = "mac and cheese";

var food = prompt("what's your favorite food?");

switch (food) {
	case 'donuts':
		console.log("I like donuts");
		break;
	case 'mac and cheese':
		console.log("I like mac and cheese");
		break;	
	case 'bananas':
		console.log("I like bananas");	
		break;
}

var grade = "C";

if (grade === "A") {
	console.log("Awesome job!");
} else if (grade === "B") {
	console.log("Good job!");
} else if (grade === "C") {
	console.log("C's get degrees");
} else if (grade === "D") {
	console.log("Not so good");
} else if (grade === "F") {
	console.log("Failing grade");
} else {
	console.log("Unexpected grade. SYSTEM ERROR!")
}

//use `else` to be a catch-all for anything else
//now call the `grade` variable and `switch` it

switch(grade) {
	case 'A':
		console.log("Awesome job");
		break;
	case 'B':
		console.log("Good job");
		break;
	case 'C':
		console.log("C's get degrees");
		break;
	case 'D':
		console.log("Not so good");
		break;
	case 'F':
		console.log("Failing grade");
		break;
	default:
		console.log("Unexpected grade. SYSTEM ERROR!")
}








