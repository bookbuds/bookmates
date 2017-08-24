const express = require( 'express' );
const router = express.Router();

//=========================
// GET
//=========================
router.get( '/', onLogin );

function onLogin( tRequest, tResponse )
{
    tResponse.render( 'users/login' );
}

//=========================
// EXPORT
//=========================
module.exports = router