'use strict'
const express = require('express');
const router = express.Router();
const activotipoCtrl = require ('../controllers/tipoActivo.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetTipoActivos);
router.post('/post', setActivos);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetTipoActivos(req,res){
    activotipoCtrl.fnGetTipoActivos()
    .then(function (result){
        res.json(result);
    })
}
function setActivos(req, res) {
    let datos = req.body;
    activotipoCtrl.setActivos(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;