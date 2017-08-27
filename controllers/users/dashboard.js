const db = require( '../../models' );
const isAuth = require( '../../middleware/auth' );
const express = require( 'express' );
const router = express.Router();

//=========================
// GET DEFAULT
//=========================
router.get( '/', isAuth, onDashboard );

function onDashboard( tRequest, tResponse )
{
    //let UserId = '1'
    //let status = 'read'

    db.User.findAll(
        {
            include: [{model: db.Book, required: true}]
        }).then(results => {
            console.log(results[0].dataValues.Books)
            let books = results[0].dataValues.Books
            let book = {
                title: books[0].dataValues.Title,
                author: books[0].dataValues.Author
            }
            tResponse.render('users/dashboard', {book})
        }
        ).catch(err => console.log(err));

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