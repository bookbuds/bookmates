//=========================
// USERBOOK MODEL
//=========================
function UserBook( tSequelize, tDataTypes )
{
    //object with the data field assignments
    const userBookData = 
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

    const userBook = tSequelize.define( "UserBook", userBookData );

    return userBook;
}

//=========================
// EXPORTS
//=========================
module.exports = UserBook;