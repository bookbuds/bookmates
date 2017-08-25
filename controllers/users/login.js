const express = require( 'express' );
const bcrypt = require( 'bcrypt' );
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