// Structure
// -------------------------------------------
// Should be roughly three elements
// - Input
// - Button
// - List

// Step 1: set the elements
// ------------------------------------------
var form = document.querySelector("body form");
var list = document.querySelector("fav-list");
var input = document.querySelector("new-input");

// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing(text) {
	e.preventDefault();
	console.log('createNewThing');
	var list = document.createElement("fave-list");
	li.innerHTML = text;
	menu.appendChild(list);
}


// Update Page function
// ------------------------------------------
function addToList(newThing) {
	console.log('addToList');

}

