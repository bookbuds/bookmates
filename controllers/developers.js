const express = require( 'express' );
const router = express.Router();

router.get('/', function (req, res) {
    res.render('developers');
}) ;

module.exports = router;