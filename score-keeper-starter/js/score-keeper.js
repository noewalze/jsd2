
// Set up the structure of your interactive pieces/IDs in the HTML file

var scoreboard = document.querySelector("#score");
var increase = document.querySelector("#increase-5");
var decrease = document.querySelector("#decrease-5");
var customScore = document.querySelector("#custom-score");
var submitScore = document.querySelector("#submit-custom-score");


// Then add an event listener that calls a function below 

increase.addEventListener("click", increasePoints);
decrease.addEventListener("click", decreasePoints);

var counter = 0;

// Here are the two functions that will do the increase/decrease math for you

function increasePoints(number) {
	 counter = counter + 5;
	 var string = counter + " Points";
	 scoreboard.innerHTML = string
}

function decreasePoints(number) {
	 counter = counter +- 5;
	 var string = counter + " Points";
	 scoreboard.innerHTML = string
}


