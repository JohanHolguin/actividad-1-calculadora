const express = require("express");
const { body } = require("express-validator");
const calculator = require("./../controller/calculator.controller");

const router = express.Router();


router.post(
    '/resta', [
        body('paramone')
        .exists()
        .withMessage('El paramatro Uno es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro Uno debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro Uno debe ser entre 1-3 caractes')
        .trim()
        .escape(),
        body('paramtwo')
        .exists()
        .withMessage('El paramatro Dos es requerido')
        .matches(/^[0-9]+$/, "i")
        .withMessage('El parametro Dos debe ser numerico')
        .isLength({ min: 1, max: 3 })
        .withMessage('El parametro Dos debe ser entre 1-3 caractes')
        .trim()
        .escape()
    ],
    calculator.result
);

/*router.get('/rest', function(req, res) {
    res.send('Soy la resta')
})*/

module.exports = router;