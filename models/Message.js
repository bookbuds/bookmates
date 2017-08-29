//=========================
// MESSAGE MODEL
//=========================
function Message( sequelize, DataTypes )
{
    //object with the data field assignments
    const messageData = 
    {
        text: DataTypes.STRING,
        is_read: DataTypes.BOOLEAN
    }

    const tempMessage = sequelize.define( "Message", messageData );

    tempMessage.associate = function( tModels )
    {
        tempMessage.belongsTo( tModels.User, { as: 'receipient'} );
        tempMessage.belongsTo( tModels.User, { as: 'author'} );        
    }

    return tempMessage;
}

//=========================
// EXPORTS
//=========================
module.exports = Message;