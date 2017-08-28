//=========================
// BUTTON HANDLERS
//=========================
$(document).ready(function() {
  $(document).on("click", ".main__books-wrapper", event, getUsers);
  $(document).on("click", ".main__books-wrapper", event, toggleUsers);
});

//=========================
// GET TO SERVER
//=========================
//send bookid to the API
function getUsers(tBookId) {
  console.log("ive been clicked");
}

function toggleUsers() {
    console.log("ive been toggled");
    // $('.main__books').toggleClass('.main__books--active')
    // $('.sidebar__users').toggleClass('.sidebar__users--active')
}
