'use strict';
const { hash } = require('../helper/bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type :DataTypes.STRING,
      allowNull : false,
      unique : {
        msg : "username already exists"
      },
      validate : {
        notNull : {
          msg : "Username is required"
        },
        notEmpty : {
            msg : "Username is required"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      unique : {
        msg : "Email already exists"
      },
      validate : {
        notNull : {
          msg : "Email is required"
        },
        notEmpty : {
            msg : "Email is required"
        },
        isEmail : {
            msg : "Incorrect e-mail format"
        }
      }
    },
    password: {
      type :DataTypes.STRING,
      allowNull : false,
      validate : {
        notNull : {
          msg : "Password is required"
        },
        notEmpty : {
            msg : "Password is required"
        },
        min : {
          args : 5,
          msg : "Password must be 5 characters"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user) => {
    user.password = hash(user.password)
  })
  return User;
};