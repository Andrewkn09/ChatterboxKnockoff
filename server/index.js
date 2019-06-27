const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/messageRoutes');

app.use(bodyParser.json());

app.use('/', routes);

const port = process.ENV || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
