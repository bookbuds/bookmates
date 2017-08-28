module.exports = {
    up: (queryInterface, Sequelize) => {
        // logic for transforming into the new state
        return queryInterface.createTable('UserBooks',
            {
                status:
                {
                    type: Sequelize.STRING,
                    validate:
                    {
                        len: [1, 140],
                        isIn: [['read', 'reading', 'wantToRead']]
                    }
                },
                createdAt:
                {
                    type: Sequelize.DATE
                },
                updatedAt:
                {
                    type: Sequelize.DATE
                },
                BookId: Sequelize.INTEGER,
                UserId: Sequelize.INTEGER
            }
        )
    },

    down: (queryInterface, Sequelize) => {
        // logic for reverting the changes
        return queryInterface.dropTable('UserBooks')
    }
}