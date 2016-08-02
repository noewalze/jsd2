// Structure
// ------------------------------------------
var input  = document.querySelector('.age-check input');
var button = document.querySelector('.age-check button');
var p      = document.querySelector('.age-check p');


// Events
// ------------------------------------------
button.addEventListener('click', checkAge);


// Event Listeners
// ------------------------------------------
function checkAge(e) {
	var age = parseInt(input.value);
	var privilege = getPrivilege(age);
	displayPrivilege(privilege);
}


// Update page functions
// ------------------------------------------
function displayPrivilege(privilege) {
	p.innerHTML = privilege
}




// Determine the privilege to display
// ------------------------------------------

// TODO: write the getPrivilege function here
// you can name the Input of the `getPrivilege` function anything you want really

function getPrivilege(definedAge){
	var privilege;
	if (definedAge < 16) {
		privilege = "You cannot do much outside of going to school";
	} else if (definedAge >= 16) {
		privilege = "You can drive";
	} else if (definedAge >= 18 ) {
		privilege = "You can vote";		
	} else if (definedAge >= 21) {	
		privilege = "You can drink alcohol";	
	} else if (definedAge >= 25) {
		privilege = "You can rent a car";
	} else if (definedAge >= 35) {
		privilege = "You can run for president";
	} else if (definedAge >= 62) {
		privilege = "You can collect social security benefits";
	} 
	return privilege;

}


