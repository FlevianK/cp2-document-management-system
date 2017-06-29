'use strict';
const bcrypt = require('bcrypt');
const salt = 8;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'admin',
        firstName: 'admin',
        lastName: 'admin',
        password: bcrypt.hashSync('admin', salt),
        email: 'admin@live.com',
        title: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'Rodger',
        firstName: 'Agom',
        lastName: 'Nandaa',
        password: bcrypt.hashSync('rodger', salt),
        email: 'rodger@gmail.com',
        title: "regular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'kelvin',
        firstName: 'Kerich',
        lastName: 'Choge',
        password: bcrypt.hashSync('kerich', salt),
        email: 'kerich@hotmail.com',
        title: "regular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
