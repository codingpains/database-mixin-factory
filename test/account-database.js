var test = require('tape');
var storage = require('./mocks/storage');
var accountStorage = require('./../core/database/memory/account')

test('should find expected account', function(assert) {
  var database = accountStorage(storage.accounts);

  database.findAccountById(1, function(error, data) {
    var expected = 1;
    var actual = data.userId;
    assert.equal(actual, expected);

    assert.end();
  });
});
