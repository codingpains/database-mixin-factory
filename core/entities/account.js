'use strict';

class Account {
  constructor(args) {
    this.id = args.id;
    this.type = args.type;
    this.userId = args.user.id;
  }
}

module.exports = Account;
