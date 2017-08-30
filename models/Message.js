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
        tempMessage.belongsTo( tModels.User, { as: 'recipient' } );
        tempMessage.belongsTo( tModels.User, { as: 'author' } );
        tempMessage.hasOne( tModels.Conversation, { as: 'message' } );
    }

    return tempMessage;
}

//=========================
// EXPORTS
//=========================
module.exports = Message;