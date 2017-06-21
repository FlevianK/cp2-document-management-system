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
        title: "admin",
      },
      {
        username: 'Rodger',
        firstName: 'Agom',
        lastName: 'Nandaa',
        password: 'rodger',
        email: 'rodger@gmail.com',
        title: "regular",
      },
      {
        username: 'kelvin',
        firstName: 'Kerich',
        lastName: 'Choge',
        password: 'kerich',
        email: 'kerich@hotmail.com',
        title: "regular",
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
