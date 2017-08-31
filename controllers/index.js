const express = require( 'express' );
const router = express.Router();

//=========================
// HOME ROUTE
//=========================
router.get('/', function( tRequest, tResponse )
{
    let user = tRequest.user ? tRequest.user.user_name : undefined

    tResponse.render( 'index', { user: user, title: 'BookMates' } );
});

//=========================
// USER ROUTES
//=========================
router.use( '/register', require( './users/register' ) );
router.use( '/login', require( './users/login' ) );
router.use( '/user', require( './users/user' ) );
router.use( '/dashboard', require( './users/dashboard' ) );
router.use( '/logout', require( './users/logout' ) );
router.use('/developers', require('./developers'));

//=========================
// MESSAGE ROUTES
//=========================
router.use( '/messages', require( './messages/messages' ) );

//=========================
// SEARCH ROUTES
//=========================
router.use( '/search', require( './search/search' ) );

//=========================
// API ROUTES
//=========================
router.use( '/api/v1/messages', require( './api/v1/messages' ) );
router.use( '/api/v1/conversations', require( './api/v1/conversations' ) );
router.use( '/api/v1/books', require( './api/v1/books' ) );
router.use( '/api/v1/users', require( './api/v1/users' ) );
router.use( '/api/v1/userbooks', require( './api/v1/userbooks' ) );

//=========================
// EXPORTS
//=========================
module.exports = router;