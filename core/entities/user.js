'use strict';

class User {
  constructor(args) {
    this.id = args.id;
    this.username = args.username;
    this.email = args.email;
  }
}

module.exports = User;
