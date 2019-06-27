const router = require('express').Router();
const messageController = require('../controllers/messageControllers.js');

router.get('/messages', messageController.getMessages);

module.exports = router;
