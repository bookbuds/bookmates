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
    if( !tRequest.user )
    {
        //user is not auth'd and gets returned to login for messin' around
        tResponse.redirect( "/login" );
        return;
    }

    //cache the user id who made the request
    const tempUserId = tRequest.user.id;

    //cache the conversation id and other user so we can send that back
    const tempConversationId = tRequest.params.conversationId;
    const bookMateId = parseInt( tRequest.params.userId );

    console.log( bookMateId );

    //if there is a user that's been auth'd with a verified id
    //find the rquested convo by id and make sure its a valid one
    if( tempUserId )
    {
        db.Conversation.findOne
        ( 
            { 
                where: { id: tempConversationId },
                raw: true
            }
        ).then( verifyConvoUser );
    }

    //make sure the user is even IN the convo (damn hackers)
    function verifyConvoUser( tConvoResults )
    {
        //no conversation - someone was messin'
        if( tConvoResults )
        {
            if( tConvoResults.user1Id == tempUserId || tConvoResults.user2Id == tempUserId )
            {
                getConvoMessages();
            }
        }
        else
        {
            //user is not auth'd and gets returned to login for messin' around
            tResponse.redirect( "/login" );
        }
    }

    function getConvoMessages()
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

    //re-render the page with messages
    function renderMessages( tMessages )
    {
        //console.log( JSON.stringify( tMessages, null, 2 ) );
        tResponse.render( 'messages/messages', { title: "Message", messages: tMessages, user: tRequest.user, bookMateId: bookMateId } );
    }

    //for sending a JSON response (testing)
    function sendJSON( tMessages )
    {
        const tempMessages = JSON.stringify( tMessages, null, 2 );
        tResponse.json( tempMessages );
    }
}

//GET CONVERSATION BETWEEN CURRENT USER AND USER ID - OR CREATE ONE
router.get( '/:userId', onGetConversation );

function onGetConversation( tRequest, tResponse )
{
    console.log( `bookMate id = ${ tRequest.params }`);
    console.log( JSON.stringify( tRequest.params, null, 2 ) );
    

    //current user making the request
    if( !tRequest.user )
    {
        //user is not auth'd and gets returned to login for messin' around
        tResponse.redirect( "/login" );
        return;
    }

    const currentUserId = tRequest.user.id;
    //other user (that is being conversed with)
    console.log( `bookMate id = ${tRequest.params.userId}`);
    const bookMateId = parseInt( tRequest.params.userId );

    console.log( currentUserId, bookMateId );

    //probably should double check if it exists the opposite way?
    //create Convo or get it if it exists
    db.Conversation.findOne
    ( 
        { 
            where: { user1Id: currentUserId, user2Id: bookMateId },
            raw: true
        }
    ).then( onConversationCreated );

    function onConversationCreated( tResults )
    {
        let tempConversationId;
        //return all messages in convo via the found convo id
        if( !tResults )
        {
            //find or create opposite convo(recursive)
            db.Conversation.findOrCreate
            ( 
                { 
                    where: { user1Id: bookMateId, user2Id: currentUserId },
                    raw: true
                }
            ).then( onConversationCreated );
            return;
        }
        
        //if its newly created, an array gets passed back with the convo AND a status (newly create: true or sumpthin)
        if( tResults.length > 1 )
        {
            tempConversationId = tResults[0].id;
        }
        else
        {
            tempConversationId = tResults.id;
        }

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

        function renderMessages( tMessages )
        {
            tResponse.render( 'messages/messages', { title: "Message", messages: tMessages, user: tRequest.user, bookMateId: bookMateId, conversationId: tempConversationId  } );
        }
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