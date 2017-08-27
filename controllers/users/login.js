const express = require( 'express' );
const router = express.Router();

//FOR AUTH
const passport = require( 'passport' );

//=========================
// GET
//=========================
router.get( '/', onLogin );

function onLogin( tRequest, tResponse )
{
    tResponse.render( 'users/login', { message: tRequest.flash( 'error' ) } );
}

//=========================
// POST (user login)
//=========================
router.post( '/', passport.authenticate( 'local-login',
{
    successRedirect : '/dashboard',
    failureRedirect : '/login',
    failureFlash : true
}));

//=========================
// EXPORT
//=========================
module.exports = router