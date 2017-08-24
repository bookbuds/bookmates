const express = require( 'express' );
const router = express.Router();

//=========================
// GET
//=========================
router.get( '/', onRegister );

function onRegister( tRequest, tResponse )
{
    tResponse.render( 'users/register' );
}

//=========================
// EXPORT
//=========================
module.exports = router