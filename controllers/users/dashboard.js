const express = require( 'express' );
const router = express.Router();

//=========================
// GET DEFAULT
//=========================
router.get( '/',  onDashboard );

function onDashboard( tRequest, tResponse )
{
    tResponse.render( 'users/dashboard' );
}

//=========================
// GET WITH USER ID
//=========================
//this will probably change once we have passport integrated
router.get( '/:id',  onDashboardUser );

function onDashboardUser( tRequest, tResponse )
{
    console.log( `the user id = ${ tRequest.params.id }` );
    tResponse.render( 'users/dashboard' );
}

module.exports = router