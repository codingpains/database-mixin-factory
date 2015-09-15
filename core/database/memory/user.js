'use strict';
const crispy = require('crispy-string');

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
  }
}

module.exports = function(database) {
  var storage = Object.create(UserStorage);
  storage.collection = database;

  return storage;
};
