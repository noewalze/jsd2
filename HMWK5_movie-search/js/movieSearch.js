// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------

	var form = document.querySelector(".form");
	var search = document.querySelector(".search");
	var details = document.querySelector(".details");
	var results = document.querySelector(".results");


// Events
// ----------------------------------------------

	form.addEventListener('submit', getResults);


// Event handlers
// ----------------------------------------------

	function getResults(event) {
		event.preventDefault();
		debugger
		search = search.value;
		console.log(search);

		var url = "http://www.omdbapi.com/?s=" + search;

		$.getJSON(url, updateResults);
	}


// Update page
// ----------------------------------------------

	function updateResults(json) {
		console.log('updateResults',json);
		results.innerHTML = '';
		json.results.forEach(createResult);

		var source = document.querySelector("results");
	}


	function createResult(details) {

		var li = document.createElement("li");

		var template = 
			'<img=' + details.image + '">' +
			'<h2>'+ details.title + '</h2>' +
			'<p>' + details.plot + '</p>' +
			'<p>' + details.imdb-link + '</p>' ;


			li.innerHTML = template;
			results.appendChild(li);
		}

