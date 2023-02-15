'use strict'
const express = require('express');
const router = express.Router();
const relacionCtrl = require ('../controllers/usuario_rel_servicio.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetRelacion);
router.post('/post', fnSetRelacion);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetRelacion(req,res){
    relacionCtrl.fnGetRelacion()
    .then(function (result){
        res.json(result);
    })
}

function fnSetRelacion(req, res) {
    let datos = req.body;
    relacionCtrl.fnSetRelacion(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;