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
            user_name: 'admin',
            email: 'admin@email.com',
            password: '$2a$12$RsgaD61iAhBt8k6uR1.m0.th5kDFNlb7cNPIryASdsHZrpn2vgnIa',
            gender: '',
            location: '',
            profile_img_url: 'http://via.placeholder.com/150x200',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            user_name: 'james',
            email: 'james@email.com',
            password: '$2a$12$RsgaD61iAhBt8k6uR1.m0.th5kDFNlb7cNPIryASdsHZrpn2vgnIa',
            profile_img_url: 'http://via.placeholder.com/150x200',
            gender: '',
            location: '',
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
