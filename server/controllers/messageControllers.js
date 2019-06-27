const db = require('../models/messageModel');
var addID = function(message, id) {
  var newMessage = message;
  newMessage.id = id;
  return newMessage;
};
module.exports.Messages = {
  getMessages: (req, res) => {},
  addMessage: (req, res) => {
    db.Messages.saveMessage(req.body, (err, { insertId }) => {
      err ? res.sendStatus(400) : res.send(addID(req.body, insertId));
    });
  }
};

module.exports.Rooms = {
  getRooms: (req, res) => {
    db.Rooms.getRooms((err, result) => {
      err ? console.log(err) : res.send(result);
    });
  },
  addRoom: (req, res) => {
    db.Rooms.addRoom(req.body.roomname, (err, result) => {
      err ? res.sendStatus(400) : res.send('Added room');
    });
  }
};
module.exports.Users = {
  addUser: (req, res) => {
    db.Users.addUser(req.body.username, (err, result) => {
      err ? res.sendStatus(400) : res.send('Added user');
    });
  }
};
//MONGODB ===========================================
// const messageModel = require('../models/messageModel.js');
// module.exports = {
//   getMessages: (req, res) => {
//     messageModel
//       .getMessages(req.params)
//       .then(messages => {
//         res.send(messages);
//         // res.send('success');
//       })
//       .catch(err => console.log(err));
//   },
//   saveMessage: (req, res) => {
//     messageModel;
//     // .saveMessage(req.body)
//     // .then(result => {
//     res.send('success');
//     // })
//     // .catch(err => console.log(err));
//   },
//   getRooms: (req, res) => {
//     messageModel
//       .getRooms()
//       .then(rooms => {
//         res.send(rooms);
//       })
//       .catch(err => console.log(err));
//   },
//   addRoom: (req, res) => {
//     messageModel
//       .addRoom(req.body)
//       .then(() => {
//         res.send('added room');
//       })
//       .catch(err => console.log(err));
//   }
// };
