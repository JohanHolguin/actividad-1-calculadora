const { validationResult } = require("express-validator");


const sumOperator = (param1, param2) => (+param1) + (+param2);

const restOperator = (param1, param2) => (+param1) - (+param2);

const multOperator = (param1, param2) => (+param1) * (+param2);

const divOperator = (param1, param2) => (+param1) / (+param2);

exports.result = (req, res, nest) => {
    const url = req.url;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error('Error');
        err.statusCode = 500;
        err.data = errors.array();
        throw err;
    }
    var result = 0;

    if (url == '/sum') {
        result = sumOperator(+req.body.paramone, +req.body.paramtwo);

    } else if (url == '/rest') {
        result = restOperator(+req.body.paramone, +req.body.paramtwo);

    } else if (url == '/mult') {
        result = multOperator(+req.body.paramone, +req.body.paramtwo);

    } else if (url == '/div') {
        result = divOperator(+req.body.paramone, +req.body.paramtwo);
    }

    const objResult = {
        url: url,
        body: req.body,
        result: result
    }
    try {
        res.status(201).json({ message: url, objResult });
    } catch (err) {

        const error = new Error('Error');
        error.statusCode = 500;
        error.data = err;
        throw error;
    }
}