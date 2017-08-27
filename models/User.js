//=========================
// USER MODEL
//=========================
function User( sequelize, DataTypes )
{
    //object with the data field assignments
    const userData = 
    {
        first_name:
        {
            type: DataTypes.STRING,
            validate:
            {
                len: [ 1, 140 ]
            }
        },

        last_name:
        {
            type: DataTypes.STRING,
            validate:
            {
                len: [ 1, 140 ]
            }
        },

        user_name:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                len: [ 1, 140 ]
            }
        },

        email:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                len: [ 3, 140 ]
            }

        },

        password:
        {
            type: DataTypes.STRING,
            allowNull: false,
            validate:
            {
                len: [ 8, 100 ]
            }
        },

        profile_img_url: DataTypes.STRING
    }

    const tempUser = sequelize.define( "User", userData );

    //SET UP LINK TABLE
    tempUser.associate = function( tModels )
    {
        tempUser.belongsToMany( tModels.Book, { through: 'UserBook', unique: false } );
    }

    return tempUser;
}

//=========================
// EXPORTS
//=========================
module.exports = User;