const db = require('../../models')
const isAuth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();

//=========================
// GET DEFAULT
//=========================
router.get('/', onDashboard);

function onDashboard(tRequest, tResponse) {
    if (tRequest.isAuthenticated()) {
        let username = tRequest.user.user_name
        let profileImage = tRequest.user.profile_img_url
        db.User.findAll(
            {
                where: { id: tRequest.user.id },
                attributes: [],
                include: [{ model: db.Book, required: true, attributes: ['title', 'author', 'img_url'] }],
                raw: true
            }).then(results => {
                console.log(results);
                tResponse.render('users/dashboard', { results: results, username: username, profileImage: profileImage })
            }
            ).catch(err => console.log(err));
    } else {
        tResponse.redirect('login');
    }

}

module.exports = router