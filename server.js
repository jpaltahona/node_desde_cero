const express = require('express');
const bodyParser = require('body-parser');
const response = require('./responses');
const message = require('./components/message/network')
const router = express.Router();

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/app', express.static('public'));
app.use('/message', message);
app.use(router);
app.listen(3000, ()=> console.log( `hello un port ${port}`))