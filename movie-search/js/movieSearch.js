// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------


// Event handlers
// ----------------------------------------------

var image = document.createElement('img');


// Update page
// ----------------------------------------------

var li = document.querySelector(“LI”);

li.addEventListener(“click”, testing)

function testing (e){
     console.log(“testing”)
     console.log(e.target);

     var target = e.target;

     if(e.target.tagName ! = "LI"){
     	console.log("DID NOT get the LI!")
     	return;
     }
}