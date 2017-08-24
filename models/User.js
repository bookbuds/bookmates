//=========================
// USER MODEL
//=========================
function User( tSequelize, tDataTypes )
{
    //object with the data field assignments
    const userData = 
    {
        first_name:
        {
            type: tDataTypes.STRING,
            vaidate:
            {
                len: [ 1, 140 ]
            }
        },

        last_name:
        {
            type: tDataTypes.STRING,
            vaidate:
            {
                len: [ 1, 140 ]
            }
        },

        user_name:
        {
            type: tDataTypes.STRING,
            allowNull: false,
            vaidate:
            {
                len: [ 1, 140 ]
            }
        },

        profile_img_url: tDataTypes.STRING
    }

    const tempUser = tSequelize.define( "User", userData );

    //SET UP LINK TABLE
    tempUser.associate = function( tModels )
    {
        tempUser.belongsToMany( tModels.Book, { through: 'UserBooks' } );
    }

    return tempUser;
}

//=========================
// EXPORTS
//=========================
module.exports = User;