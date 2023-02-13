'use strict'
const express = require('express');
const router = express.Router();
const usuarioCtrl = require ('../controllers/usuario.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */

router.get('/getUsuarios',fnGetUsuario);
router.post('/post', setUsuario);
router.post('/actualizarUsuario',actualizarUsuario);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//


function fnGetUsuario(req,res){
    usuarioCtrl.fnGetUsuario()
    .then(function (result){
        res.json(result);
    })
}

function setUsuario(req, res) {
    let datos = req.body;
    usuarioCtrl.setUsuario(datos)
        .then(function (result) {
            res.json(result);
        });
}
function actualizarUsuario(req, res) {
    let datos = req.body;
    usuarioConsolaCtrl.actualizarUsuario(datos)
        .then(function (result) {
            res.json(result);
        })
}
module.exports = router;