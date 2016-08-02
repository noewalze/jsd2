// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)

	var streetNumber = ['989', '2772', '8772', '99981', '2', '10'];
	var streetName = ['Market', 'Mission', 'Waller', 'Haight', 'Stanyan', 'Fell'];
	var cityName = ['San Francisco', 'Los Angeles', 'Sacramento', 'Santa Barbara', 'San Luis Obispo', 'Seattle'];
	var stateName = ['California', 'Texas', 'Alaska', 'Indiana', 'Oregon', 'Washington'];
	var postalCode = ['94122', '77382', '21001', '65998', '77873', '95762'];



// Event Listeners
// ------------------------------------------

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateAddress(e) {
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address

	var randomNumber = streetNumber[getRandomInt(0,streetNumber.length-1)];
	...
	...
	...
	...
	fullAddress = randomNumber + ' ' + randomStreet + ' ' + randomCity + ' ' + randomState + ' ' + randomPostal

	addAddress(fullAddress);

}

// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}




