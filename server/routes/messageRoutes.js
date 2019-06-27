const router = require('express').Router();
const messageController = require('../controllers/messageControllers.js');

router.get('/messages/:room', messageController.getMessages);
router.post('/messages', messageController.saveMessage);

module.exports = router;
