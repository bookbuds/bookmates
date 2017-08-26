const express = require( 'express' );
const bcrypt = require( 'bcrypt' );
const router = express.Router();

//FOR AUTH
const db = require( '../../models' );
const passport = require( 'passport' );
// const LocalStrategy = require( 'passport-local' ).Strategy;

//=========================
// GET
//=========================
router.get( '/', onLogin );

function onLogin( tRequest, tResponse )
{
    tResponse.render( 'users/login' );
}

//=========================
// POST (user login)
//=========================
router.post( '/', passport.authenticate( 'local-login' ) );

function onUserLogin( tRequest, tResponse )
{
    const username = tRequest.body.username;
    const password = tRequest.body.password;
}


//=========================
// EXPORT
//=========================
module.exports = router