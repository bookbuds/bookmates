const express = require('express');
const router = express.Router();
const request = require('request');
const parseString = require('xml2js').parseString

//=========================
// GET SEARCH
//=========================
router.get('/', onSearch);

function onSearch(tRequest, tResponse) {
    tResponse.render('search/search');
}

router.post('/:query', function (req, res) {
    const query = req.params.query;

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

                let tempObj = {
                    title: work.title[0],
                    author: work.author[0].name[0],
                    img: work.image_url[0]
                }

                searchResults.push(tempObj);
            }

            res.send(searchResults)
        });
    });
});




//=========================
// EXPORTS
//=========================
module.exports = router