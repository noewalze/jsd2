/*
  Please add all Javascript code to this file.
*/

// Elements
// ------------------------

var mainSearch = document.querySelector('.main');
var article = document.querySelector('.article');
var ul = document.querySelector('.menu');

var articleTemplate = document.querySelector("#article-template");
var sourceTemplate = document.querySelector("#source-template");
var sources = [
	{ 
		name: 'Techcrunch',
		code: 'techcrunch'
	}
	{
		name: 'BBCNews',
		code: 'bbc-news'
	}
	{
		name: 'Bloomberg'
		code: 'bloomberg'
	}
];	

// Event 
// ------------------------

mainSearch.addEventListener('click', getArticles);

// Event Handler
// ------------------------


// ------------------------

// morph this function to be able to pass a parameter --> multiple sources
function getArticles(sources){
	//event.preventDefault();

	var url = 'https://newsapi.org/v1/articles?source=' + sources.code + '&sortBy=top' + '.&apiKey=ed377471b76b462bbb9f2b3bde1670b2';

	$.getJSON(url, updateArticles);

}

function updateArticles(json){
	console.log('updateArticles', json);

	// compile article template

	var template = Handlebars.compile(sourceTemplate.innerHTML);
	article.innerHTML = template(json);
	var template = Handlebars.compile(articleTemplate.innerHTML);
	source.innerHTML = template(json);
}




