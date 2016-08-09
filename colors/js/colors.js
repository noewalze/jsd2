
//Element
//----------------

var body = document.querySelector('body');
var li = document.querySelector('li');

//Events
//----------------

ul.addEventListener('click', clickColor);

function clickColor(e){

	// Event delegation
	if(e.target.tagName ! ="LI"){
		return;
	}

	console.log(e.target.dataset.color);
	change(e.target.dataset.color);

}

function change(color){
	console.log('change', color);
	body.className = color;
}