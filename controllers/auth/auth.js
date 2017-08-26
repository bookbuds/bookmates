const db = require( '../../models' );
const passport = require( 'passport' );
const LocalStrategy = require( 'passport-local' ).Strategy;

// used to serialize the user for the session
passport.serializeUser( function( user, done ) 
{
	done( null, user.id );
});

// used to deserialize the user
passport.deserializeUser( function( id, done )
{
	User.findById( id, function( err, user )
	{
		done( err, user );
	});
});

passport.use( 'local-login', new LocalStrategy (
	function( username, password, done ) 
	{
		console.log( `password: ${password}` );
		db.User.findOne( { where: { user_name: username } } ).then( user =>
		{
			console.log( typeof user );
			console.log( JSON.stringify( user.get(), null, 2 ) ); 
			if ( !user )
			{
				console.log( 'no user' );
				return done( null, false, { message: 'Incorrect username.' } );
			}
			
			console.log( user.get( 'password' ) );

			return done( null, user );
    	});
    }
  ));