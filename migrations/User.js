module.exports = {
    up: (queryInterface, Sequelize) => {
        // logic for transforming into the new state
        return queryInterface.createTable('Users',
            {
                user_name:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate:
                    {
                        unique: true,
                        len: [1, 140]
                    }
                },

                email:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate:
                    {
                        unique: true,
                        len: [3, 140]
                    }

                },

                password:
                {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate:
                    {
                        len: [8, 100]
                    }
                },

                gender: Sequelize.STRING,
                location: Sequelize.STRING,
                profile_img_url: Sequelize.STRING,
                createdAt:
                {
                    type: Sequelize.DATE
                },
                updatedAt:
                {
                    type: Sequelize.DATE
                },
            })
    },

    down: (queryInterface, Sequelize) => {
        // logic for reverting the changes
        return queryInterface.dropTable('Users')
    }
}