var mongoose = require('mongoose');
mongoose.Promise = Promise;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/chatterbox', { useNewUrlParser: true });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

var Schema = mongoose.Schema;

var roomSchema = new Schema({
  roomname: { type: String, unique: true }
});
var Room = mongoose.model('Room', roomSchema);

var userSchema = new Schema({
  username: { type: String, unique: true }
});
var User = mongoose.model('User', userSchema);

var messageSchema = new Schema(
  {
    message: String,
    username: String,
    roomname: String
  },
  { timestamps: true }
);
var Message = mongoose.model('Message', messageSchema);

module.exports.Message = Message;
module.exports.Room = Room;
module.exports.User = User;
