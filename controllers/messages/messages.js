const express = require( 'express' );
const router = express.Router();
const db = require( '../../models' )

//=========================
// GET
//=========================
router.get( '/:userId/:conversationId', onGetMessages );

//GET CONVERSATIONS BETWEEN TWO USERS THAT ALREADY EXISTS
function onGetMessages( tRequest, tResponse )
{  
    //cache the conversation id
    const tempConversationId = tRequest.params.conversationId;

    //cache the other user so we can send it back
    const bookMateId = tRequest.params.userId;

    //if there is a user that's been auth'd
    if( tRequest.user )
    {
        db.Message.findAll( 
            { 
                where: { ConversationId: tempConversationId },
                include:
                [ 
                    { model: db.User, as: 'author', required: true, attributes: [ 'id', 'user_name' ] },
                    { model: db.User, as: 'recipient', required: true, attributes: [ 'id', 'user_name' ] }                    
                ],
            } 
        ).then( renderMessages );
    }
    else
    {
        tResponse.redirect( "/login" );
    }

    //MIGHT HAVE TO GET THE COVO HERE
    function renderMessages( tMessages )
    {
        //console.log( JSON.stringify( tMessages, null, 2 ) );
        tResponse.render( 'messages/messages', { title: "Message", messages: tMessages, user: tRequest.user, bookMateId: bookMateId  } );
    }

    function sendJSON( tMessages )
    {
        const tempMessages = JSON.stringify( tMessages, null, 2 );
        tResponse.json( tempMessages );
    }
}

router.get( '/:userId', onGetConversation );

function onGetConversation( tRequest, tResponse )
{
    //current user making the request
    const currentUserId = tRequest.user.id;
    
    //other user (that is being conversed with)
    const bookMateId = parseInt( tRequest.params.userId );

    console.log( currentUserId, bookMateId );

    //probably should double check if it exists the opposite way?
    //create Convo or get it if it exists
    db.Conversation.findOrCreate( { where: { user1Id: currentUserId, user2Id: bookMateId } } ).then( onConversationCreated );

    function onConversationCreated( tResults )
    {
        console.log( tResults );
    }
}

//=========================
// EXPORTS
//=========================
module.exports = router;


//=========================
// GRAVEYARD
//=========================
// function onGetMessages( tRequest, tResponse )
// {
//     const tempOtherUser = tRequest.params.userId;

//     //if there is a user that's been auth'd
//     if( tRequest.user )
//     {
//         const tempId = tRequest.user.id;
//         //get messages from db
//         db.Message.findAll
//         ( 
//             { 
//                 where: 
//                 { 
//                     $or:
//                     [
//                         { recipientId: tempId },
//                         { authorId: tempId }
//                     ],
//                 },

//                 include: 
//                 [ 
//                     { model: db.User, as: 'author', required: true, attributes: [ 'id', 'user_name' ] },
//                     { model: db.User, as: 'recipient', required: true, attributes: [ 'id', 'user_name' ] }                    
//                 ],
//             }
//         ).then( renderMessages );
//     }