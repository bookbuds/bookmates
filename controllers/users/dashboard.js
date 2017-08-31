const db = require("../../models");
const isAuth = require("../../middleware/auth");
const express = require("express");
const router = express.Router();
const parseUsersBooks = require('../../helpers/parseUsersBooks');

//=========================
// GET DEFAULT
//=========================
router.get("/", onDashboard);

function onDashboard(tRequest, tResponse) {
  if (tRequest.isAuthenticated()) {
    let username = tRequest.user.user_name;
    let profileImage = tRequest.user.profile_img_url;

    console.log(tRequest.user);
    db.User
      .findAll({
        where: { id: tRequest.user.id },
        attributes: ['profile_img_url'],
        include: [
          {
            model: db.Book,
            required: true,
            attributes: ["title", "author", "img_url"]
          }
        ],
        raw: true
      })
      .then(results => {
          console.log(results)
        console.log(parseUsersBooks(results));
        let userInfo = parseUsersBooks(results);

        tResponse.render("users/dashboard", {
          userInfo: userInfo,
          username: username,
          title: 'Bookshelf'
        });
      })
      .catch(err => console.log(err));
  } else {
    tResponse.redirect("login");
  }
}

module.exports = router;
