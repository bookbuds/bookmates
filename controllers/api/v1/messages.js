const express = require( 'express' );
const router = express.Router();
const db = require( '../../../models' );

//=========================
// GET MESSAGES
//=========================
router.get( '/', onGetMessages );

function onGetMessages( tRequest, tResponse )
{
    tResponse.json( { messageId: 1, messageText: "hey" } );
}

//=========================
// POST
//=========================
router.post( '/', onPostMessage );

function onPostMessage( tRequest, tResponse )
{
   //if message has no text, redirect back to messages?
    if( !tRequest.body.messageText )
    {
        tResponse.redirect( "/messages" );
        return;
    }

    let tempMessage = 
    {
        text: tRequest.body.messageText,
        authorId: tRequest.user.id,
        recipientId: tRequest.body.messageRecipient,
        is_read: false
    }

    db.Message.create( tempMessage );
    tResponse.redirect( "/messages" );
}

//=========================
// EXPORTS
//=========================
module.exports = router