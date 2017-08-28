const express = require( 'express' );
const router = express.Router();
const db = require( '../../../models' );

//=========================
// GET
//=========================
router.get( '/', onGetUsers );

function onGetUsers( tRequest, tResponse )
{
    db.User.findAll( { attributes: { exclude: [ 'password', 'createdAt', 'updatedAt' ] } } ).then( returnUsers );
    
    function returnUsers( tResults )
    {
        tResponse.json( tResults );
    }
}

//=========================
// EXPORTS
//=========================
module.exports = router;