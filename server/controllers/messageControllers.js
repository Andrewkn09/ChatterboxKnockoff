const messageModel = require('../models/messageModel.js');
module.exports = {
  getMessages: (req, res) => {
    messageModel
      .getMessages(req.params)
      .then(messages => {
        res.send(messages);
      })
      .catch(err => console.log(err));
  },
  saveMessage: (req, res) => {
    messageModel
      .saveMessage(req.body)
      .then(result => {
        res.send('success');
      })
      .catch(err => console.log(err));
  },
  getRooms: (req, res) => {
    messageModel
      .getRooms()
      .then(rooms => {
        res.send(rooms);
      })
      .catch(err => console.log(err));
  },
  addRoom: (req, res) => {
    messageModel
      .addRoom(req.body)
      .then(() => {
        res.send('added room');
      })
      .catch(err => handleError(err, res));
  },
  addUser: (req, res) => {
    messageModel
      .addUser(req.body)
      .then(() => {
        res.send('added user');
      })
      .catch(err => handleError(err, res));
  }
};

var handleError = (err, res) => {
  console.log(err);
  res.sendStatus(500);
};
