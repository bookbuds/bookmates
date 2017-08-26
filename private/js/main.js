import '../sass/style.scss';
import '../../node_modules/holderjs/holder.js'

console.log('im wide awake - its morning');


// var $ = require('jQuery');
// var parseString = require('xml2js').parseString;
// var xml2js = require('xml2js');

// var goodreadsKey = "vgXMPZsQvQc9pfKqedhA";

// $(document).ready(function () {
// 	var search = "Game of Thrones"
// 	var queryURL = "https://www.goodreads.com/search.xml?key=" + goodreadsKey + "&q=" + search;

// 	$.ajax({
// 		url: queryURL,
// 		method: 'GET'
// 	}).done(function (response) {
// 		console.log(response);
// 		xml2js.parseString(response)
// 		console.log(response);
// 	});
// });
if (module.hot) {
	module.hot.accept()
}