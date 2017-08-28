const express = require( 'express' );
const router = express.Router();
const db = require( '../../../models' );

//=========================
// GET
//=========================
router.get( '/', onGetUserBooks );

function onGetUserBooks( tRequest, tResponse )
{
    db.UserBook.findAll( { attributes: { exclude: [ 'createdAt', 'updatedAt' ] } } ).then( returnUserBooks );
    
    function returnUserBooks( tResults )
    {
        tResponse.json( tResults );
    }
}

//=========================
// EXPORTS
//=========================
module.exports = router;