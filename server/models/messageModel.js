const db = require('../../sql/index.js');

module.exports.Messages = {
  getMessages: roomname => {},
  saveMessage: message => {}
};

module.exports.Rooms = {
  addRoom: (roomname, callback) => {
    sql = 'INSERT INTO rooms (roomname) VALUES (?)';
    db.query(sql, [roomname], callback);
  },
  getRooms: callback => {
    sql = 'SELECT * FROM rooms';
    db.query(sql, callback);
  }
};
module.exports.Users = {
  addUser: username => {}
};

//MONGODB ===================================================
// const Messages = require('../../mongoDb/index.js').Message;
// const Rooms = require('../../mongoDb/index.js').Room;

// module.exports = {
//   getMessages: roomname => {
//     return Rooms.findOne(roomname)
//       .then(({ _id }) => {
//         return Messages.find({ roomID: _id });
//       })
//       .catch(err => console.log(err));
//   },
//   saveMessage: message => {
//     Messages.create(message);
//   },

//   getRooms: () => {
//     return Rooms.find();
//   },
//   addRoom: room => {
//     return Rooms.create(room);
//   }
// };
