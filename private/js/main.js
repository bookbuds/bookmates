import '../sass/style.scss';
import '../../node_modules/holderjs/holder.js'

console.log('im wide awake - its morning');

$(document).ready(function () {

    $('.search').on('click', function(e){
        e.preventDefault();
    
        let query = $('.query').val()

        $.ajax({
            url: '/search/'+query,
            method: 'POST'
        }).then((results) => {
            console.log(results);
        })

    })
})

if (module.hot) {
    module.hot.accept()
}