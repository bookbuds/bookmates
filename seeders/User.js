'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('Users', [
        {
            first_name: 'James',
            last_name: 'Doe',
            user_name: 'james',
            profile_img_url: 'http://via.placeholder.com/150x200',
            email: 'james@email.com',
            password: '903482fds90uf239fjds0jds',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            first_name: 'Jimmy',
            last_name: 'Aflack',
            user_name: 'james',
            profile_img_url: 'http://via.placeholder.com/150x200',
            email: 'james@email.com',
            password: '903482fds90uf239fjds0jds',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            first_name: 'Duncan',
            last_name: 'Doe',
            user_name: 'james',
            profile_img_url: 'http://via.placeholder.com/150x200',
            email: 'james@email.com',
            password: '903482fds90uf239fjds0jds',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            first_name: 'Luke',
            last_name: 'Cool',
            user_name: 'james',
            profile_img_url: 'http://via.placeholder.com/150x200',
            email: 'james@email.com',
            password: '903482fds90uf239fjds0jds',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            first_name: 'Noe',
            last_name: 'Tim',
            user_name: 'james',
            profile_img_url: 'http://via.placeholder.com/150x200',
            email: 'james@email.com',
            password: '903482fds90uf239fjds0jds',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
