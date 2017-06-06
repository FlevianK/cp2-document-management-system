'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
      classMethods: {
        associate: (models) => {
          // associations can be defined here
          User.belongTo(models.Role, {
            foreignKey: 'userId',
            onDelete: 'CASCADE',
          });
        }
      }
    });
  return User;
};