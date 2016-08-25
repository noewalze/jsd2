/*
  Please add all Javascript code to this file.
*/

// Elements
// ------------------------

var mainSearch = document.querySelector('.main');
var article = document.querySelector('.article');

var articleTemplate = document.querySelector("#article-template");

// Event 
// ------------------------

mainSearch.addEventListener('click', getArticles);

// Event Handler
// ------------------------

// morph this function to be able to pass a parameter
function getArticles(event){
	//event.preventDefault();

	var url = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=ed377471b76b462bbb9f2b3bde1670b2";

	$.getJSON(url, updateArticles);

}

function updateArticles(json){
	console.log('updateArticles', json);

	// compile article template

	var template = Handlebars.compile(articleTemplate.innerHTML);
	article.innerHTML = template(json);
}