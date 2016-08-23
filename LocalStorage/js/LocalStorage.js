localStorage.setItem('name','timm');
localStorage.setItem('birthday', 1980);
localStorage.setItem('car', car);

var myBirthday = localStorage.getItem('birthday');
var myName = localStorage.getItem('name');
var car = {
	make: "Ford",
	model: "Mustang",
	year: 1967
	};

var carString = JSON.stringify(car);
localStorage.setItem('car', carString);

var myCar = localStorage.getItem('car');
myCar = JSON.parse(myCar);



var model = document.querySelector(".model");
var button = document.querySelector("button");
var color = document.querySelector(".color");
var p = document.querySelector("p");


button.addEventListener('click',saveCar);

function saveCar(e) {
	console.log('saveCar');
	console.log(color.value);

	var car = {
		color: color.value,
		model: model.value
	}

	car = JSON.stringify(car);

	localStorage.setItem('car', car);

	updateCar();
}


// Update car

function updateCar(){
	p.textContent = car.color + " " + car.model;

	// get object from localStorage
	var car = localStorage.getItem('car');

	// (first time run - no value saved yet)
	if (car == null) {
		return;
	}

	// convert to an object
	car = JSON.parse(car);
}


// remove car

function clearCar() {
	localStorage.removeItem('car');
}
















