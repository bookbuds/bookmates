//=========================
// USERBOOK MODEL
//=========================
function UserBook( sequelize, DataTypes )
{
    //object with the data field assignments
    const userBookData = 
    {
        status:
        {
            type: DataTypes.STRING,
            validate:
            {
                len: [ 1, 140 ],
                // isIn: [['read', 'reading', 'wantToRead']]
            }
        }
    }

    const userBook = sequelize.define( "UserBook", userBookData );

    return userBook;
}

//=========================
// EXPORTS
//=========================
module.exports = UserBook;