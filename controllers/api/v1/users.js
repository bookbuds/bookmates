const express = require("express");
const router = express.Router();
const db = require("../../../models");

//=========================
// GET
//=========================
router.get("/", onGetUsers);

function onGetUsers(tRequest, tResponse) {
  db.User
    .findAll({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] }
    })
    .then(returnUsers);

  function returnUsers(tResults) {
    tResponse.json(tResults);
  }
}

//============================
// GET ALL USERS READING BOOK
//============================
router.get("/:bookid", onGetUsersWithBookId);

function onGetUsersWithBookId(tRequest, tResponse) {
  let bookid = tRequest.params.bookid;
  db.UserBook
    .findAll({
      where: { BookId: bookid, status: "reading" },
      raw: true
    })
    .then(results => {
      return results.map(item => item.UserId);
    })
    .then(userids => {
      db.User
        .findAll({
          where: { id: userids },
          attributes: ['user_name', 'gender', 'location', 'profile_img_url'],
          raw: true
        })
        .then(returnResults)
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

  function returnResults(tResults) {
    tResponse.json(tResults);
  }
}

//=========================
// EXPORTS
//=========================
module.exports = router;
