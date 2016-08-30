console.log('hello sticky notes');

var button = document.querySelector("button");
var container = document.querySelector(".container");
var boxColor = document.querySelector(".box-color");
var boxNote = document.querySelector(".box-note");

window.addEventListener("load", function(){
    // init the sticky note count
    var noteCount = 1
        button.addEventListener("click", function(){
        console.log("button clicked");

        // get data from user
        var color = boxColor.value;
        var note = boxNote.value;

        var box = document.createElement("div");
        box.className = "box";
        box.innerHTML = noteCount + ". " + note;
        box.style.background = color;

        // append to DOM
        container.appendChild(box);
        noteCount ++; 
    })


})

