// Setup
// ----------------------------------------------

// 1. Getting elements with document.querySelector()
// 2. Save elements in variables with 'var' using an assignment (=)
// 3. Make an element listen for a click event with addEventListener
// 4. Grouping together code with functions. Remember to use an Event Handler function for each Event Listener
// 5. New: changing an element CSS class using the Classlist API



// Structure
// ----------------------------------------------

	var stop = document.querySelector("control stop-button");
	var slow = document.querySelector("control slow-button");
	var go = document.querySelector("control go-button");
	var caution = document.querySelector("control caution-button");
	var trafficlight = document.querySelector("traffic-light");

// Events
// ----------------------------------------------

	stop.addEventListener('click', stop);
	slow.addEventListener('click', slow);
	go.addEventListener('click', go);
	caution.addEventListener('click', caution);
	trafficLight.addEventListener('click', trafficLight);


// Event handlers
// ----------------------------------------------

// div 
	function stop(i){
		trafficLight.Classlist.add(stop);
		trafficLight.Classlist.remove(slow);
		trafficLight.Classlist.remove(go);
		trafficLight.Classlist.remove(caution);
	}

	function slow(i){
		trafficLight.Classlist.remove(stop);
		trafficLight.Classlist.add(slow);
		trafficLight.Classlist.remove(go);
		trafficLight.Classlist.remove(caution);
	}
		
	function go(i){
		trafficLight.Classlist.remove(stop);
		trafficLight.Classlist.remove(slow);
		trafficLight.Classlist.add(go);
		trafficLight.Classlist.remove(caution);
	}	

	function cautionTimer(i){
		trafficLight.Classlist.remove(stop);
		trafficLight.Classlist.remove(slow);
		trafficLight.Classlist.remove(go);
		trafficLight.Classlist.add(caution);

		// Timer added into .html file

	}







