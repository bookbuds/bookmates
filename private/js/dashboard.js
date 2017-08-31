//=========================
// BUTTON HANDLERS
//=========================
$(document).ready(function () {
    $(document).on("click", ".books__image", event, getUsers);
    $(document).on("click", ".books__image", event, openSidebar);
    $('.sidebar__button-close').on("click", event, closeSidebar);
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

    $.get({ url: `/api/v1/users/${id}` })
        .then(results => {
            console.log(results);

            let $userId = $('.profile__main-name').attr('data-id')

            let $sidebarHeading = $('.sidebar__heading')
            let $bookWrapper = $('.sidebar__book-wrapper')
            let $userWrapper = $('.sidebar__user-wrapper')

            if (results.length > 0) {

                let bookhtml = '';
                let userhtml = '';

                userhtml +=
                    `
                    
                    `

                for (let index = 0; index < results.length; index++) {
                    let element = results[index];

                    if (element.id != $userId) {

                        userhtml +=
                            `
                            <div class="sidebar__profile-wrapper">
                                <div class="sidebar__profile-avatar">
                                    <img src='http://via.placeholder.com/150x200' alt="profile image">
                                </div>
                                <div class="sidebar__profile-info">
                                    <h3 class="sidebar__profile-name">${element.user_name}</h3>
                                    <form action="/messages/${element.id}">
                                        <button class="sidebar__profile-message">Message</button>
                                    </form>
                                </div>
                            </div>
                            `
                    }
                }

                $userWrapper.html(userhtml);
                $sidebarHeading.children().remove();

            } else {

                let $sidebarHeading = $('.sidebar__heading')

                let html =
                    `
                        <h1>No users are currently reading this book</h1>
                    `

                $bookWrapper.children().remove();
                $userWrapper.children().remove();
                $sidebarHeading.html(html);
            }

        }
        )
}

function openSidebar() {
    $('.main__books').addClass('main__books--active')
    $('.sidebar__users').addClass('sidebar__users--active')
    $('.sidebar__button-close').addClass('sidebar__button-close--visible')

}

function closeSidebar() {
    $('.main__books').removeClass('main__books--active')
    $('.sidebar__users').removeClass('sidebar__users--active')
    $('.sidebar__button-close').removeClass('sidebar__button-close--visible')

    $('.sidebar__heading').children().remove()
    $('.sidebar__book-wrapper').children().remove()
    $('.sidebar__user-wrapper').children().remove()

}