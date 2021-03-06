// const db = require('../../sql/index.js');

// module.exports.Messages = {
//   getMessages: ({ roomname }, callback) => {
//     sql = `SELECT m.id, m.message, u.username, r.roomname
//                FROM messages m
//                INNER JOIN rooms r ON m.roomID = r.id
//                INNER JOIN users u ON m.userID = u.id
//                WHERE r.roomname = ?
//                ORDER BY m.id DESC`;
//     db.query(sql, [roomname], callback);
//   },
//   saveMessage: ({ message, username, roomname }, callback) => {
//     sql = `INSERT INTO messages (message, userID, roomID)
//           VALUES ( ?,
//             (SELECT id FROM users WHERE username = ?),
//              (SELECT id FROM rooms WHERE roomname = ?))`;
//     db.query(sql, [message, username, roomname], callback);
//   }
// };

// module.exports.Rooms = {
//   addRoom: (roomname, callback) => {
//     sql = 'INSERT INTO rooms (roomname) VALUES (?)';
//     db.query(sql, [roomname], callback);
//   },
//   getRooms: callback => {
//     sql = 'SELECT * FROM rooms';
//     db.query(sql, callback);
//   }
// };
// module.exports.Users = {
//   addUser: (username, callback) => {
//     sql = 'INSERT INTO users (username) VALUES (?)';
//     db.query(sql, [username], callback);
//   }
// };

//MONGODB ===================================================
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
