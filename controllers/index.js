const express = require( 'express' );
const router = express.Router();

//=========================
// HOME ROUTE
//=========================
router.get('/', function( tRequest, tResponse )
{
    tResponse.render( 'index', { user: req.user } );
});

//=========================
// USER ROUTES
//=========================
// router.use( '/register', require( './users/signup' ) );
// router.use('/login', require( './users/login' ) );
// router.use( '/logout', require( './users/logout' ) );

module.exports = router;