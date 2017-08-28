const express = require( 'express' );
const router = express.Router();

//=========================
// HOME ROUTE
//=========================
router.get('/', function( tRequest, tResponse )
{
    tResponse.render( 'index', { user: tRequest.user } );
});

//=========================
// USER ROUTES
//=========================
router.use( '/register', require( './users/register' ) );
router.use( '/login', require( './users/login' ) );
router.use( '/dashboard', require( './users/dashboard' ) );

//=========================
// SEARCH ROUTES
//=========================
router.use( '/search', require( './search/search' ) );

//=========================
// API ROUTES
//=========================
router.use( '/api/v1/messages', require( './api/v1/messages' ) );
router.use( '/api/v1/books', require( './api/v1/books' ) );
router.use( '/api/v1/users', require( './api/v1/users' ) );
router.use( '/api/v1/userbooks', require( './api/v1/userbooks' ) );

//=========================
// EXPORTS
//=========================
module.exports = router;