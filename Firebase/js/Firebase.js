// Setup
// --------------------------

// Establish a connection with Firebase

var firebaseReference = new Firebase("https://jsd2-e9441.firebaseio.com/");

// Elements
// --------------------------

var button = document.querySelector("button");

// Events
// --------------------------

button.addEventListener('click', saveChanges);

function saveChanges(e){
	console.log('saveChanges');

	var theme = {
		color: 'blue'
	}

	console.log(theme);

	// save data to firebase
	firebaseReference.set(theme);
}