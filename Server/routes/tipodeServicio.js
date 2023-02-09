'use strict'
const express = require('express');
const router = express.Router();
const tipodeServicioCtrl = require ('../controllers/tipodeServicio.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetTipodeServicio);
router.post('/post', setTipodeServicio);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetTipodeServicio(req,res){
    tipodeServicioCtrl.fnGetTipodeServicio()
    .then(function (result){
        res.json(result);
    })
}
function setTipodeServicio(req, res) {
    let datos = req.body;
    tipodeServicioCtrl.setTipodeServicio(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;