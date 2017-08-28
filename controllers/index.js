const express = require( 'express' );
const router = express.Router();

//=========================
// HOME ROUTE
//=========================
router.get('/', function( tRequest, tResponse )
{
    let user = tRequest.user ? tRequest.user.user_name : undefined

    tResponse.render( 'index', { user: user } );
});

//=========================
// USER ROUTES
//=========================
router.use( '/register', require( './users/register' ) );
router.use( '/login', require( './users/login' ) );
router.use( '/user', require( './users/user' ) );
router.use( '/dashboard', require( './users/dashboard' ) );

//=========================
// SEARCH ROUTES
//=========================
router.use( '/search', require( './search/search' ) );

//=========================
// API ROUTES
//=========================
router.use( '/api/v1/messages', require( './api/messages' ) );

//=========================
// EXPORTS
//=========================
module.exports = router;