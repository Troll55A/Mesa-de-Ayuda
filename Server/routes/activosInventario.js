'use strict'
const express = require('express');
const router = express.Router();
const activoCtrl = require ('../controllers/activosInventario.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getActivos',fnGetActivos);
router.post('/post',agregaActivos);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetActivos(req,res){
    activoCtrl.fnGetActivos()
    .then(function (result){
        res.json(result);
    })
}
function agregaActivos(req, res) {
    let datos = req.body;
    activoCtrl.agregaActivos(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;