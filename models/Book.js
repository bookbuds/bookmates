//=========================
// BOOK MODEL
//=========================
function Book( tSequelize, tDataTypes )
{
    //object with the data field assignments
    const bookData = 
    {
        title:
        {
            type: tDataTypes.STRING,
            allowNull: false,
            vaidate:
            {
                len: [ 1, 140 ]
            }
        },

        author:
        {
            type: tDataTypes.STRING,
            vaidate:
            {
                len: [ 1, 140 ]
            }
        },

        img_url: tDataTypes.STRING
    }

    const tempBook = tSequelize.define( "Book", bookData );

    //SET UP LINK TABLE
    tempBook.associate = function( tModels )
    {
        tempBook.belongsToMany( tModels.User, { through: 'UserBooks' } );
    }

    return tempBook;
}

//=========================
// EXPORTS
//=========================
module.exports = Book;