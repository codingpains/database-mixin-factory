'use strict';

module.exports = function(dbnames, store) {
  var database = {};
  var prop;

  dbnames.forEach((name) => {
    let db = require('./' + name)(store[name + 's']);
    for(prop in db) {
      if (prop !== 'collection') {
        var func = db[prop];
        database[prop] = func.bind(db);
      }
    }
  });

  return database;
};
