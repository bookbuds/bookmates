//=========================
// CONVERSATOIN MODEL
//=========================
function Conversation( sequelize, DataTypes )
{
    //object with the data field assignments
    // const conversationData = 
    // {
    //     status:
    //     {
    //         type: DataTypes.STRING,
    //         validate:
    //         {
    //             len: [ 1, 140 ],
    //             // isIn: [['read', 'reading', 'wantToRead']]
    //         }
    //     }
    // }

    const tempConversation = sequelize.define( "Conversation" );

    tempConversation.associate = function( tModels )
    {
        tempConversation.belongsTo( tModels.User, { as: "user1" } );
        tempConversation.belongsTo( tModels.User, { as: "user2" } );
        tempConversation.hasOne( tModels.Message );
    }

    return tempConversation;
}

//=========================
// EXPORTS
//=========================
module.exports = Conversation;