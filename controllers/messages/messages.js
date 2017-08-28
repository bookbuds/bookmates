const express = require( 'express' );
const router = express.Router();

//=========================
// GET
//=========================
router.get( '/', onGetMessages );

function onGetMessages( tRequest, tResponse )
{
    tResponse.render( 'messages/messages' );
}

module.exports = router;