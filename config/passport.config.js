const db = require( '../models' );
const passport = require( 'passport' );
const passwordHasher = require( '../controllers/password-hasher' );
const LocalStrategy = require( 'passport-local' ).Strategy;

//=========================
// SESSION
//=========================
// used to serialize the user for the session
passport.serializeUser( function( tUser, done ) 
{
	//console.log( `user id = ${tUser.id}` );
	done( null, tUser.id );
});

// used to deserialize the user
passport.deserializeUser( function( tId, done )
{
	console.log( 'deserialize how many times do i run?' );
	//console.log( `user to de id = ${tId}` );
	db.User.findById( tId ).then( function( tUser )
	{
		done( null, tUser );
	});
});

//=========================
// LOGIN AUTH
//=========================
passport.use( 'local-login', new LocalStrategy (
	function( tUsername, tPassword, done ) 
	{
		//wait a tick
		process.nextTick( function()
		{
			console.log( 'passport.use: how many times do i run?' );
			db.User.findOne( { where: { user_name: tUsername } } ).then( tempUser =>
			{
				//if no user could be found
				if ( !tempUser )
				{
					return done( null, false, { message: 'Invalid username.' } );
				}

				//regular password, then hashed password
				passwordHasher.validatePassword( tPassword, tempUser.password ).then( isCorrect =>
				{
					//if the password is correct
					if( isCorrect )
					{
						return done( null, tempUser );
					}
					else
					{
						return done( null, false, { message: 'Incorrect password.' } );
					}
				});
			});
		});
    }
  ));

  //=========================
  // EXPORTS
  //=========================
  module.exports = passport;