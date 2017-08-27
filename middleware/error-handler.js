//=========================
// ERROR HANDLER MIDDLEWARE
//=========================
const errorHandler = 
{
    //catch the error
    errorCatcher: function( tRequest, tResponse, tNext )
    {
        console.log( 'first error handler fired' );
        var tempError = new Error( 'Not Found' );
        tempError.status = 404;
        tNext( tempError );
    },

    //display the error if caught
    errorDisplay: function( tError, tRequest, tResponse, tNext )
    {
        console.log( 'second error handler fired' );
        // set locals, only providing error in development
        tResponse.locals.message = tError.message;
        tResponse.locals.error = tRequest.app.get( 'env' ) === 'development' ? tError : {};
    
        // render the error page
        tResponse.status( tError.status || 500 );
        tResponse.render( 'error' );
    }
}

//=========================
// EXPORTS
//=========================
module.exports = errorHandler;