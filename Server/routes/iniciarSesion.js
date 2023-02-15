'use strict'
const express = require('express');
const router = express.Router();
const initSesionCtrl = require ('../controllers/iniciarSesion.controller');
router.post('/iniciarSesion', iniciarSesion);

function iniciarSesion(req, res) {
    let datos = req.body;
    console.log("cambio en incio de sesion",datos)
    
    initSesionCtrl.iniciarSesion(datos)
        .then(function (result) {
            res.json(result);
        })
}
module.exports = router;