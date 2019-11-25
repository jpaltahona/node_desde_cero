const express = require('express');
const router = express.Router();
const {success, error} = require('../../responses');
const { addMessage , getMessage } = require('./controller');


router.get('/', (req, res) => {
    getMessage()
        .then( (messageList) => {
            success(req, res, messageList, 200, 'god')
        })
        .catch( err => error(req ,res , 'Unexpected Error', 400, err) )
});

router.post('/', (req, res) => {
    const { user, message } = req.body;

    addMessage(user, message)
        .then( (fullMessage) =>  success(req, res, fullMessage, 201 , 'god') )
        .catch( err => error(req ,res , 'Unexpected Error', 400, err) )
});

module.exports = router;