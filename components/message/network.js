const express = require('express');
const router = express.Router();
const response = require('../../responses');
const controller = require('./controller');


router.get('/', (req, res) => {
    response.success(req, res, 'Estos son tus mensajes')
});

router.post('/', (req, res) => {
    const { user, message } = req.body;

    controller.addMessage(user, message)
        .then( (fullMessage) =>  response.success(req, res, fullMessage, 201 , 'god') )
        .catch( error => response.error(req, res, error, 400, 'errores inesperados' ) )

});

module.exports = router;