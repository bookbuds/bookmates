const express = require( 'express' );
const router = express.Router();

//=========================
// GET SEARCH
//=========================
router.get( '/', onSearch );

function onSearch( tRequest, tResponse )
{
    tResponse.render( 'search/search' );
}

//=========================
// EXPORTS
//=========================
module.exports = router