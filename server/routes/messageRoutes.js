const router = require('express').Router();

const messageController = require('../controllers/messageControllers.js');
router.get('/messages/:roomname', messageController.getMessages);
router.post('/messages', messageController.saveMessage);
router.get('/rooms', messageController.getRooms);
router.post('/rooms', messageController.addRoom);
router.post('/users', messageController.addUser);

module.exports = router;
