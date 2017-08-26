import '../sass/style.scss';
import '../../node_modules/holderjs/holder.js'

console.log( 'im wide awake - its morning' );

if(module.hot) {
    module.hot.accept()
}

var jason;
var $ = require('jQuery');
var parseString = require('xml2js').parseString;

var goodreadsKey = "vgXMPZsQvQc9pfKqedhA";

$(document).ready(function(){
	var search = "Game of Thrones"
	var queryURL = "https://www.goodreads.com/search.xml?key=" + goodreadsKey + "&q=" + search;
		
	$.ajax({
		url: queryURL,
		method: 'GET',
		dataType: 'text'
	}).done(function(response){
			parseString(response, function(err, result){
				console.log("====== JSON version ======")
				console.log(result);

				//console log book title
				var bookTitle = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].title[0];
				console.log("====== Book Title ======")
				console.log(bookTitle);

				//console log author of book
				var author = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].author[0].name[0];
				console.log("====== Author ======")
				console.log(author);

				//console log img url
				var imgURL = result.GoodreadsResponse.search[0].results[0].work[0].best_book[0].image_url[0];
				console.log("====== IMG URL ======")
				console.log(imgURL);

			});
	});
});

if (module.hot) {
	module.hot.accept()
}