//=========================
// USER MODEL
//=========================
function UserBooks( tSequelize, tDataTypes )
{
    //object with the data field assignments
    const userBooksData = 
    {
        status:
        {
            type: tDataTypes.STRING,
            validate:
            {
                len: [ 1, 140 ],
                // isIn: [['read', 'reading', 'wantToRead']]
            }
        }
    }

    const userBooks = tSequelize.define( "UserBooks", userBooksData );

    return userBooks;
}

//=========================
// EXPORTS
//=========================
module.exports = UserBooks;