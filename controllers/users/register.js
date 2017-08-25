const express = require( 'express' );
const db = require( '../../models' );
const bcrypt = require( 'bcrypt' );
const router = express.Router();

const saltRounds = 12;

//=========================
// GET
//=========================
router.get( '/', onRegister );

function onRegister( tRequest, tResponse )
{
    tResponse.render( 'users/register' );
}

//=========================
// POST (create new user)
//=========================
router.post( '/', onCreateUser );

function onCreateUser( tRequest, tResponse )
{
    //console.log( tRequest.body );
    
    let tempUser = 
    {
        user_name: tRequest.body.username,
        email: tRequest.body.email,
        password: tRequest.body.password
    }

    db.User.create( tempUser ).then( onUserCreated );

    function onUserCreated( tStatus, tData )
    {
        console.log( 'creatue new user status:' );
        console.log( tStatus.dataValues );
        console.log( tData );
    }
}

//=========================
// EXPORT
//=========================
module.exports = router