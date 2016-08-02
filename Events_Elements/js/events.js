// set a counter at the top

var counter = 0;

// load a console log to check yourself and to create a document

console.log("template loaded");
var body = document.querySelector("body");

// creating an Element object. Here we create the h1 element:

var h1 = document.createElement("h1");
h1.innerHTML = "Events";

// now to appendChild onto the Parent object. Parent object is an element.

body.appendChild(h1);

// creating an Event object. Here we create the MouseEvent element:

var me = document.createEvent("MouseEvent");
me.initEvent("dblclick");

// whited-out example here
	// h1.dispatchEvent(me) - this will add an event listener connect the element to the event
	// ex: Element.addEventListerner(event type, function)
	// ex: Element.addEventListerner("dblclick", function) - dblclick is an event happening to the element. Function gets attached.

	// h1.addEventListerner("dblclick", youClickedMe);

	//function youClickedMe() {

	//	console.log('youClickedMe');
	//}

// add an event listener with a counter

h1.addEventListener("dblclick", count);

function count(event) {
	counter++;
	console.log('count',counter)
	console.log(me.type);
	console.log(me.target.innerHTML);

}