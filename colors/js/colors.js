// Elements
// ----------------
var body = document.querySelector('body');
var ul = document.querySelector('ul');


// Events
// ----------------
ul.addEventListener('click', clickColor);

// TODO: on window load, get color from local storage
// should be the restoreColor function --> you need to create this

function restoreColor(e) {
	console.log('restoreColor');

	var scheme = {
		color: "silver",
	}	

	scheme = JSON.stringify(scheme);

	localStorage.setItem('scheme', scheme);

	change();
}

function clickColor(e) {
	// console.log('clickColor',e.target);


	// Event Delegation
	// "Return Early" if an li element was not clicked
	if (e.target.tagName != "LI") {
		return;
	}

	console.log(e.target.dataset.color);
	change(e.target.dataset.color);

	localStorage.setItem('clickColor', clickColor);
}

function change(color) {
	console.log('change',color);
	body.className = color;
}

