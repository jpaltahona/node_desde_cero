exports.success = (req, res , msj, status) => {
    res.status(status || 201).send(
        {   errores: "", 
            body: msj
        }
    )
}

exports.error = (req, res , msj, status, details) => {
    console.error('[response error] ' + details );
    res.status(status || 500).send(
        {
            errores: msj,
            body: ""
        }
    )
} 