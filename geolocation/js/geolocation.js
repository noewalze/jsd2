// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};

var map options = {
		center: { lat: 37.789683, lng: --122.245738 },
		zoom: 8
	};


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var locations = document.querySelector('main .locations');
var error     = document.querySelector('main .error');
var map = document.querySelector('.map');
var el = document.querySelector('#geolocation-map');
var lat = position.coords.latitude;
var lng = position.coords.longitude;


// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------

//function clickButton(event) {
	// console.log('getLocation', event);
	// navigator.geolocation.getCurrentPosition(geoSuccess, event, options)

// }

  function clickButton(event){
   		console.log('watchPosition', event);
   		navigator.geolocation.watchPosition(geoSuccess, options);
   		 }


// Geolocation callback functions
// -------------------------------------------

function geoSuccess(position) {
	console.log("updateLocation", position);
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;

		var marker = new google.maps.Marker({
			map: map,
			position: {
				lat: latitude,
				lng: longitude
			}
		})
	}

// Update page functions
// -------------------------------------------

function showPosition(position) {
	var li = document.createElement('li');
    li.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}


// Callback when Google Maps has loaded
// -------------------------------------------

 function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.789683, lng: --122.245738},
          zoom: 8
        });

// Adding watchPosition function
// -------------------------------------------

// -- Please see Event Handlers section for refactored watchPosition function


// Add / update the location marker
// ------------------------------------------

function createMarker(place) {
		var marker = new google.maps.Marker({
			map: map,
			position: {lat, lng}
		});

	}
