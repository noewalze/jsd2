// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");
var header = document.querySelector(".header");
var restaurantTemplate = document.querySelector("#restaurant-template");
var headerTemplate = document.querySelector("#header-template");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';

	// compile header template
	var template = handlebars.compile(headerTemplate.innerHTML);
	var html = templated(json);
	header.innerHTML = html;

	var template = Handlebars.compile(restaurantTemplate.innerHTML);

	html = template(json.restaurants);
	results.innerHTML = html;
}
