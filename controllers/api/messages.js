const express = require( 'express' );
const router = express.Router();

//=========================
// GET MESSAGES
//=========================
router.get( '/', onGetMessages );

function onGetMessages( tRequest, tResponse )
{
    tResponse.json( { messageId: 1, messageText: "hey" } );
}

//=========================
// EXPORTS
//=========================
module.exports = router