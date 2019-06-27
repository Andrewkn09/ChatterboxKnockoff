const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/messageRoutes');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/', routes);

const port = process.ENV || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
