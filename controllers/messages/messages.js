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
        const tempId = tRequest.user.id;
        //get messages from db
        db.Message.findAll
        ( 
            { 
                where: 
                { 
                    $or:
                    [
                        { recipientId: tempId },
                        { authorId: tempId }
                    ],
                },

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

    function renderMessages( tMessages )
    {
        //console.log( JSON.stringify( tMessages, null, 2 ) );
        tResponse.render( 'messages/messages', { messages: tMessages, user: tRequest.user } );
    }
}

//=========================
// EXPORTS
//=========================
module.exports = router;