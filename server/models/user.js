'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      required: true,
    },
    firstName: {
      type: DataTypes.STRING,
      required: true,
    },
    lastName: {
      type: DataTypes.STRING,
      required: true,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
    },
    password: {
      type: DataTypes.STRING,
      required: true,
    }
  }, {
      classMethods: {
        associate: (models) => {
          // associations can be defined here
          User.belongsTo(models.Role, {
            foreignKey: 'roleId',
            onDelete: 'CASCADE',
          });
          User.hasMany(models.Document, {
            foreignKey: 'userId',
            as: 'document',
          });
        }
      }
    });
  return User;
};