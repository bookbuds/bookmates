const bcrypt = require( 'bcrypt' );
const saltRounds = 12;

const passwordHasher = 
{
    hashPassword: function( tPassword )
    {
        return bcrypt.hash( tPassword, saltRounds )
    },
    
    //TODO change to async
    validatePassword: function( tPassword, tHash )
    {
        return bcrypt.compare( tPassword, tHash )
    }
}

module.exports = passwordHasher;