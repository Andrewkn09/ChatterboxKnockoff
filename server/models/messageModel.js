const Messages = require('../../db');
const Rooms = require('../../db');

module.exports = {
  saveMessage: message => {
    return Messages.create(message);
  },

  getMessages: room => {
    return Messages.find(roo);
  }
};
