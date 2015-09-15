var test = require('tape');
var storage = require('./mocks/storage');
var userStorage = require('./../core/database/memory/user')

test('should find expected user', function(assert) {
  var database = userStorage(storage.users);

  database.findUserById(5, function(error, data) {
    var expected = 'codingpains';
    var actual = data.username;
    assert.equal(actual, expected);

    assert.end();
  });
});

test('should insert new user', function(assert) {
  var database = userStorage(storage.users);

  database.insertUser({email: 'new@user.com', username: 'newuser'}, function(error, data) {
    var expected = true;
    var actual = !!data.id;
    assert.equal(actual, expected);

    database.findUserById(data.id, function(error, data) {
      expected = 'newuser';
      actual = data.username;
      assert.equal(actual, expected);

      assert.end()
    });
  });
})
