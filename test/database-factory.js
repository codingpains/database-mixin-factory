var test = require('tape');
var factory = require('./../core/database/memory/database-factory');
var storage = require('./mocks/storage');

test('should return methods for account and user storage', function(assert) {
  var database = factory(['user', 'account'], storage);

  var expected = 'function';
  var actual = typeof database.findUserById;
  assert.equal(actual, expected);

  actual = typeof database.findAccountById;
  assert.equal(actual, expected);

  assert.end();
});

test('should return usable methods for user storage', function(assert) {
  var database = factory(['user', 'account'], storage);

  database.findUserById(1, function(error, data) {
    var expected = 'iddar';
    var actual = data.username;
    console.log('Test data ', error, data);
    assert.equal(actual, expected);

    assert.end();
  });
});

test('should return usable methods for account storage', function(assert) {
  var database = factory(['user', 'account'], storage);

  database.findAccountById(1, function(error, data) {
    var expected = 1;
    var actual = data.userId;
    assert.equal(actual, expected);

    assert.end();
  });
});
