const db = require('../models/messageModel');
module.exports.Messages = {
  addMessage: (req, res) => {},
  getMessages: (req, res) => {}
};

module.exports.Rooms = {
  addRoom: (req, res) => {
    db.Rooms.addRoom(req.body.roomname, (err, result) => {
      err ? console.log(err) : res.send('Added room');
    });
  },
  getRooms: (req, res) => {
    db.Rooms.getRooms((err, result) => {
      err ? console.log(err) : res.send(result);
    });
  }
};
module.exports.Users = {
  addUser: (req, res) => {}
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
