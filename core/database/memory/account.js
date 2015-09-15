'use strict';
const crispy = require('crispy-string');

class AccountNotExistError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AccountNotExist';
    Error.captureStackTrace(this, this.constructor);
  }
}

var AccountStorage = {
  collection: null,

  findAccountById(id, callback) {
    let result = this.collection.find((account) => {
      return account.id === id;
    });

    if (result) return callback(null, result);

    callback(new AccountNotExistError('Account with id ' + id + ' does not exist'));
  }
};

module.exports = function(database) {
  var storage = Object.create(AccountStorage);
  storage.collection = database;

  return storage;
};
