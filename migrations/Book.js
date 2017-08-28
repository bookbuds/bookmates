module.exports = {
    up: (queryInterface, Sequelize) => {
        // logic for transforming into the new state
        return queryInterface.createTable('Books',
            {
                title:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate:
                    {
                        len: [1, 140]
                    }
                },

                author:
                {
                    type: Sequelize.STRING,
                    validate:
                    {
                        len: [1, 140]
                    }
                },
                img_url: Sequelize.STRING,
                createdAt: 
                {
                    type: Sequelize.DATE,
                },
                updatedAt:
                {
                    type: Sequelize.DATE
                },
            }
        )
    },

    down: (queryInterface, Sequelize) => {
        // logic for reverting the changes
        return queryInterface.dropTable('Books')
    }
}
