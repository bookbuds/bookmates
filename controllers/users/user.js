const db = require('../../models')
const isAuth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const parseUsersBooks = require('../../helpers/parseUsersBooks');

//=========================
// GET DEFAULT
//=========================
router.get('/:username', onUser);

function onUser(tRequest, tResponse) {
    let username = tRequest.params.username
    let auth = tRequest.isAuthenticated()

    if (tRequest.isAuthenticated() && tRequest.user.user_name == username) {
        tResponse.redirect('dashboard')
    } else {
        db.User.findAll(
            {
                where: { user_name: username },
                attributes: ['profile_img_url'],
                include: [{ model: db.Book, attributes: ['title', 'author', 'img_url'] }],
                raw: true
            }).then(results => {
                if (results.length == 0) {
                    tResponse.redirect('/')
                } else {
                    console.log(parseUsersBooks(results));
                    let userInfo = parseUsersBooks(results);

                    tResponse.render('users/user', { userInfo: userInfo, username: username, auth: auth, title: 'Bookshelf' })
                }
            }
            ).catch(err => console.log(err));
    }
}



module.exports = router