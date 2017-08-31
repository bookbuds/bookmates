//=========================
// BOOK MODEL
//=========================
function Book( sequelize, DataTypes )
{
    //object with the data field assignments
    const bookData = 
    {
        title:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                len: [ 1, 140 ]
            }
        },

        author:
        {
            type: DataTypes.STRING,
            validate:
            {
                len: [ 1, 140 ]
            }
        },

        img_url: DataTypes.STRING
    }

    const tempBook = sequelize.define( "Book", bookData );

    //SET UP LINK TABLE
    tempBook.associate = function( tModels )
    {
        tempBook.belongsToMany( tModels.User, { through: 'UserBook', unique: false } );
    }

    return tempBook;
}

//=========================
// EXPORTS
//=========================
module.exports = Book;