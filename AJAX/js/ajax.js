// Structure
// --------------------------------------------------------
var p = document.querySelector("body p");

// create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";

// setup ajax request
var jqxhr = $.getJSON(url, handleData);

// callback function for ajax request
// ajax callbacks expect the json data
	function handleData(json){
	console.log(json);

	var description = json['description'];

	p.textContent = description

// technique 1 - unpack json and save to variable
	// var concepts = json["_embedded"]["concepts"];
	// concepts.forEach();

// technique 2 - just go right to array in json using bracket notation
	json["_embedded"]["concepts"].forEach(createConcept);

	function createConcept(item){

	console.log(item["description"]);
	}

// 1. create a new UL in HTML with class "Concepts"
// 2. create one li forEach item in the Array,append it to UL
// 3. set the li's id attribute to the concept id property
function createConcept(item){
	var li = document.createElement("li");
	li.textContent = item["description"];
	ul.appendChild(li);
	}

}
