'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Documents', [
      {
        title: 'Home coming',
        content: 'East West home is best',
        access: 'public',
        userRole: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
      },
      {
        title: 'Machine Language',
        content: 'Coding machine language is awesome',
        access: 'private',
        userRole: 'regular',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
      },
      {
        title: 'MeteorJs',
        content: 'It is out dated nowadays',
        access: 'public',
        userRole: 'regular',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Documents', null, {});
  },
};
