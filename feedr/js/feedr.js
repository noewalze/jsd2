/*
  Please add all Javascript code to this file.
*/

// Elements
// ------------------------

var mainSearch = document.querySelector('.main');

var articleTemplate = document.querySelector("#article-template");

// Event 
// ------------------------

main.addEventListener('click', getArticles);

// Event Handler
// ------------------------

function getArticles(event){
	event.preventDefault();

	var url = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=ed377471b76b462bbb9f2b3bde1670b2";

	$getJSON(url, updateArticles);

}

function updateArticles(json){
	console.log('updateArticles', json);
}