const Messages = require('../../mongoDb/index.js').Message;
const Rooms = require('../../mongoDb/index.js').Room;
const Users = require('../../mongoDb/index.js').User;

module.exports = {
  getMessages: roomname => {
    return Messages.find(roomname).sort({ createdAt: -1 });
  },
  saveMessage: message => {
    return Messages.create(message);
  },

  getRooms: () => {
    return Rooms.find();
  },
  addRoom: room => {
    return Rooms.create(room);
  },
  addUser: username => {
    return Users.create(username);
  }
};
