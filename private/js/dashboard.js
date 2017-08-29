//=========================
// BUTTON HANDLERS
//=========================
$(document).ready(function () {
    $(document).on("click", ".main__books-wrapper", event, getUsers);
    $(document).on("click", ".main__books-wrapper", event, toggleUsers);
});

//=========================
// GET TO SERVER
//=========================
//send bookid to the API
function getUsers(tBookId) {
    console.log("ive been clicked");
    let $this = this

    let id = $($this).attr('data-id')
    let title = $($this).attr('data-title')
    let author = $($this).attr('data-author')
    let imgurl = $($this).attr('data-imgurl')

    $.get({ url: `/api/v1/users/${id}` }).then(results => { console.log(results); })
}

function toggleUsers() {
    $('.main__books').addClass('main__books--active')
    $('.sidebar__users').addClass('sidebar__users--active')
}
