"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert("UserBooks", [
      {
        status: "read",
        createdAt: new Date(),
        updatedAt: new Date(),
        BookId: 1,
        UserId: 1
      },
      {
        status: "read",
        createdAt: new Date(),
        updatedAt: new Date(),
        BookId: 2,
        UserId: 1
      },
      {
        status: "reading",
        createdAt: new Date(),
        updatedAt: new Date(),
        BookId: 3,
        UserId: 1
      },
      {
        status: "reading",
        createdAt: new Date(),
        updatedAt: new Date(),
        BookId: 4,
        UserId: 1
      },
      {
        status: "reading",
        createdAt: new Date(),
        updatedAt: new Date(),
        BookId: 4,
        UserId: 2
      },
      {
        status: "reading",
        createdAt: new Date(),
        updatedAt: new Date(),
        BookId: 3,
        UserId: 2
      }
    ]);
  },

  down: function(queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
