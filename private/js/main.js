import '../sass/style.sass';
import '../../node_modules/holderjs/holder.js';
import './search.js';
import './dashboard.js';

console.log( 'im wide awake - its morning' );

//THIS WONT RELOAD THE PAGE - GOTTA USE THE get method override hack for that
// $(document).ready(function () {

//     $( '.search' ).on( 'click', function( e ){
//         e.preventDefault();
    
//         let tempQuery = $('.query').val()

//         $.post({
//             url: '/search',
//             data: { query: tempQuery }
//         });
//     })
// })

if (module.hot) {
    module.hot.accept()
}