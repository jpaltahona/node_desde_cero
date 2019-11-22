const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    response.success(req, res, 'Estos son tus mensajes')
});

router.post('/message', (req, res) => {
    console.log(req.body)
    console.log(req.query.error);
    if(req.query.error == 'ok'  ){
        response.error(req, res, 'errores inesperado', 401, 'es solo una  simulacion');
    } else {
        response.success(req, res, req.body, 201)
    }
});

module.exports = router;