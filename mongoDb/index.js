// var mongoose = require('mongoose');
// mongoose.Promise = Promise;

// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// } else {
//   mongoose.connect('mongodb://localhost/chatterbox', { useNewUrlParser: true });
// }

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Connection error:'));
// db.once('open', () => {
//   console.log('Connected to db...');
// });

// var Schema = mongoose.Schema;

// var roomSchema = new Schema({
//   roomname: String
// });
// var Room = mongoose.model('Room', roomSchema);

// var messageSchema = new Schema(
//   {
//     username: String,
//     message: String,
//     roomID: { type: Schema.Types.ObjectId, ref: 'Room' }
//   },
//   { timestamps: true }
// );
// var Message = mongoose.model('Message', messageSchema);

// module.exports.Message = Message;
// module.exports.Room = Room;
