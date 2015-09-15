'use strict';

module.exports = function(dbnames, store) {
  var database = {};

  dbnames.forEach((name) => {
    let db = require('./' + name)(store[name + 's']);

    for(var prop in db) {
      if (prop !== 'database') {
        database[prop] = function() {
          return db[prop].apply(db,  Array.prototype.slice.call(arguments));
        }
      }
    }
  });

  return database;
};
