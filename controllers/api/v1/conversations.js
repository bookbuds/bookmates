const express = require( 'express' );
const router = express.Router();
const db = require('../../../models');

//=========================
// GET USER CONVOS
//=========================
router.get( '/', onGetConversations );

function onGetConversations( tRequest, tResponse ) 
{  
    //if no user has been auth'd, send error response
    if( !tRequest.user )
    {
        tResponse.json( { status: 'bad', error: "user was not authenticated" } );
        return;
    }

    //get the current user id
    let userId = tRequest.user.id
    
    //find all convos of the current user
    db.Conversation.findAll(
        {
            where:
            {
                $or: { user1Id: userId, user2Id: userId }
            }
        }
    ).then( results => { tResponse.json( results ) } );
}

//=========================
// GET USER CONVOS BY ID
//=========================
//get user convos by id (for now im not locking it down with auth requirement)
router.get( '/:userId', onGetUserConversation );

function onGetUserConversation( tRequest, tResponse ) 
{
    let userId = tRequest.params.userId;

    db.Conversation.findAll(
        {
            where:
            {
                $or: { user1Id: userId, user2Id: userId }
            }
        }
    ).then( results => { tResponse.json( results ) } )
}

//=========================
// EXPORTS
//=========================
module.exports = router