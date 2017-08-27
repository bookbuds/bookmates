const express = require( 'express' );
const db = require( '../../models' );
const passwordHasher = require( '../password-hasher.js' );
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
// POST (create new user)
//=========================
router.post( '/', onCreateUser );

//TODO break this up into smaller chunks
function onCreateUser( tRequest, tResponse )
{    
    //create a temporary user that we will post to the db
    let tempUser = 
    {
        user_name: tRequest.body.username,
        email: tRequest.body.email,
        password: tRequest.body.password
    }

    //passwordHasher
    console.log( passwordHasher );
    console.log( passwordHasher.hashPassword );
    
    passwordHasher.hashPassword( tempUser.password ).then( tPassword =>
    {
        tempUser.password = tPassword;
        createUser( tempUser );
    });


    // if( tempUser.password != null )
    // {
    //     bcrypt.genSalt( saltRounds, onSaltComplete )
    // }

    // function onSaltComplete( tError, tSalt )
    // {
    //     bcrypt.hash( tempUser.password, tSalt, function( tError, tHash ) 
    //     {
    //         tempUser.password = tHash;
    //         createUser( tempUser )
    //     });
    // }

    //push new user to the db
    function createUser( tUser )
    {
        db.User.create( tUser ).then( onUserCreated );
    }
    
    //on user created completed
    function onUserCreated( tStatus )
    {
        console.log( 'creatue new user status:' );
        console.log( tStatus.dataValues );

        //return to this page for now (reset fields)
        tResponse.redirect( '/register' );
    }
}

//=========================
// EXPORT
//=========================
module.exports = router