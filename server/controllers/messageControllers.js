const messageModel = require('../models/messageModel.js');
module.exports = {
  getMessages: (req, res) => {
    messageModel.getMessages(req.params).then(messages => {
      res.send(messages);
    });
  },
  saveMessage: (req, res) => {
    messageModel
      .saveMessage(req.body)
      .then(result => {
        res.send('success');
      })
      .catch(err => console.log(err));
  }
};
