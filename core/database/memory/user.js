'use strict';
var crispy = require('crispy-string');

class UserNotExistError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UserNotExist';
    Error.captureStackTrace(this, this.constructor);
  }
}

var UserStorage = {
  collection: null,

  findUserById(id, callback) {
    let result = this.collection.find((user) => {
      return user.id === id;
    });
    if (result) return callback(null, result);

    callback(new UserNotExistError('User with id ' + id + ' does not exist'));
  },

  storeUser(user, callback) {
    if (user.id) return this.updateUser(user, callback);
    this.insertUser(user, callback);
  },

  updateUser(user, callback) {
    let userId = user.id;
    let toModify = this.collection.find((user) => user.id === userId);

    if (toModify) {
      Object.assign(toModify, user);
      return callback(null, toModify);
    }

    callback(new UserNotExistError('User with id ' + id + ' does not exist'));
  },

  insertUser(user, callback) {
    let data = {};
    data.id = crispy.base32String(13);
    data.username = user.username;
    data.email = user.email;
    this.collection.push(data);
    callback(null, data);
  }
}

module.exports = function(database) {
  var storage = Object.create(UserStorage);
  storage.collection = database;

  return storage;
};
