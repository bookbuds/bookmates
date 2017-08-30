const express = require('express');
const router = express.Router();
const request = require('request');
const parseString = require('xml2js').parseString

//=========================
// GET SEARCH
//=========================
router.get('/:query', onSearch);

function onSearch(tRequest, tResponse) {
    const query = tRequest.params.query
    const user = tRequest.user;

    console.log(query);
    if (!query) {
        tResponse.send('bad request - no query');
        return;
    }

    const apiKey = process.env.GOODREADS_API_KEY;

    let queryURL = "https://www.goodreads.com/search.xml?key=" + apiKey + "&q=" + query;

    let options = {
        url: queryURL,
        dataType: 'text'
    }

    request.get(options, function (error, response, body) {

        let searchResults = [];

        parseString(body, function (err, result) {

            let xml = result.GoodreadsResponse.search[0].results[0];

            for (let i = 0; i < xml.work.length; i++) {
                let work = xml.work[i].best_book[0]

                let tempObj =
                    {
                        title: work.title[0],
                        author: work.author[0].name[0],
                        img: work.image_url[0]
                    }

                searchResults.push(tempObj);
            }

            tResponse.render('search/search', { bookCollection: { searchResults }, user: user, title: 'Search' });
        });
    });
}

//=========================
// EXPORTS
//=========================
module.exports = router;