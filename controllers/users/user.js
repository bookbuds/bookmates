const db = require('../../models')
const isAuth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

//=========================
// GET DEFAULT
//=========================
router.get('/:username', onUser);

function onUser(tRequest, tResponse) {
    let username = tRequest.params.username

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
                    console.log(results);
                    
                    let profileImage = results[0].profile_img_url
                    tResponse.render('users/user', { results: results, username: username, profileImage: profileImage, title: 'Bookshelf' })
                }
            }
            ).catch(err => console.log(err));
    }
}

module.exports = router