'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'kezzy',
        firstName: 'Awori',
        lastName: 'Angiro',
        password: 'kezzy',
        email: 'kezzy@live.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "admin",
      },
      {
        username: 'Rodger',
        firstName: 'Agom',
        lastName: 'Nandaa',
        password: 'rodger',
        email: 'rodger@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "regular",
      },
      {
        username: 'kelvin',
        firstName: 'Kerich',
        lastName: 'Choge',
        password: 'kerich',
        email: 'kerich@hotmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        title: "regular",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
