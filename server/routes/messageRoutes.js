const router = require('express').Router();

// const messageController = require('../controllers/messageControllers.js');

// router.get('/rooms', messageController.Rooms.getRooms);
// router.post('/rooms', messageController.Rooms.addRoom);
// router.post('/users', messageController.Users.addUser);
// router.get('/messages/:roomname', messageController.Messages.getMessages);
// router.post('/messages', messageController.Messages.addMessage);

//MONGODB =============================================
const messageController = require('../controllers/messageControllers.js');
router.get('/messages/:roomname', messageController.getMessages);
router.post('/messages', messageController.saveMessage);
router.get('/rooms', messageController.getRooms);
router.post('/rooms', messageController.addRoom);
router.post('/users', messageController.addUser);

module.exports = router;
