const db = require('../models/messageModel');

module.exports.Messages = {
  getMessages: (req, res) => {
    db.Messages.getMessages(req.params, (err, messages) => {
      err ? handleError(err, res) : res.send(messages);
    });
  },
  addMessage: (req, res) => {
    console.log(req.body);
    db.Messages.saveMessage(req.body, (err, result) => {
      err ? handleError(err, res) : res.send('success');
    });
  }
};

module.exports.Rooms = {
  getRooms: (req, res) => {
    db.Rooms.getRooms((err, rooms) => {
      err ? handleError(err, res) : res.send(rooms);
    });
  },
  addRoom: (req, res) => {
    db.Rooms.addRoom(req.body.roomname, (err, result) => {
      err ? handleError(err, res) : res.send('Added room');
    });
  }
};
module.exports.Users = {
  addUser: (req, res) => {
    db.Users.addUser(req.body.username, (err, result) => {
      err ? res.sendStatus(500) : res.send('Added user');
    });
  }
};

var addID = (message, id) => {
  var newMessage = message;
  newMessage.id = id;
  return newMessage;
};

var handleError = (err, res) => {
  console.log(err);
  res.sendStatus(500);
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
