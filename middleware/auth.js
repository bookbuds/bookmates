//=========================
// USER AUTH CHECK
//=========================
function isAuth( tRequest, tResponse, tNext )
{
    //check if there is a user (or, if a user is auth'd)
    if( tRequest.user ) 
    {
        return tNext();
    }

    //if the user is not auth'd send back to login
    return tResponse.redirect( "/login" );
}

//=========================
// EXPORTS
//=========================
module.exports = isAuth;