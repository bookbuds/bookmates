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

    return queryInterface.bulkInsert('Books', [
        {
            title: 'Generic Book',
            author: 'Unique Author',
            img_url: 'http://via.placeholder.com/150x200',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Generic Book',
            author: 'Unique Author',
            img_url: 'http://via.placeholder.com/150x200',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Generic Book',
            author: 'Unique Author',
            img_url: 'http://via.placeholder.com/150x200',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            title: 'Generic Book',
            author: 'Unique Author',
            img_url: 'http://via.placeholder.com/150x200',
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
