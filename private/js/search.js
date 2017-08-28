//=========================
// BUTTON HANDLERS
//=========================
$( document ).ready( function() 
{
    $( '.book-button' ).on( 'click', function( tEvent )
    {
        tEvent.preventDefault();

        //get status that was passed on the button clicked
        const tempStatus = tEvent.target.dataset.status;

        //define book(from the parent) and add status
        let tempBook = JSON.parse( tEvent.target.parentElement.dataset.book );
        addBookToUser( tempBook, tempStatus );
    });
});

//=========================
// POST TO SERVER
//=========================
//send book to the API
function addBookToUser( tBook, tStatus )
{
    //set book status
    tBook.status = tStatus;

    //define post options
    const tempPostOptions = { url: 'api/v1/books/addToUser', data: tBook, method: 'POST' };
    
    //post to API
    $.post( tempPostOptions ).then( ( tempResults ) => 
    {
        console.log( tempResults );
    });
}