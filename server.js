const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./network/routes');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

routes(app);

app.use('/app', express.static('public'));

app.listen(3000, ()=> console.log( `hello un port ${port}`))