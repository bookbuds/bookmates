const express = require( 'express' );
const router = express.Router();
const db = require( '../../models' )

//=========================
// GET
//=========================
router.get( '/', onGetMessages );

function onGetMessages( tRequest, tResponse )
{
    if( tRequest.user )
    {
        //get messages from db
        tResponse.render( 'messages/messages', { messages: [ { title: 'hey', text: "whats up?" } ] } );
    }
    else
    {
        tResponse.redirect( "/login" );
    }
}

//=========================
// EXPORTS
//=========================
module.exports = router;