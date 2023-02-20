'use strict'
const express = require('express');
const router = express.Router();
const AreaCrtl = require ('../controllers/area.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getarea',fnGetArea);
router.post('/post', fnagregaArea);
router.post('/eliminarArea', eliminarArea);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetArea(req,res){
    AreaCrtl.fnGetArea()
    .then(function (result){
        res.json(result);
    })
}

function fnagregaArea(req, res) {
    let datos = req.body;
    AreaCrtl.fnagregaArea(datos)
        .then(function (result) {
            res.json(result);
        });
}
function eliminarArea(req, res) {
    let datos = req.body;
    AreaCrtl.fnEliminarArea(datos)
        .then(function (result) {
            res.json(result);
        });
}

module.exports = router;