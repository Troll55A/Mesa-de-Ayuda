'use strict'
const express = require('express');
const router = express.Router();
const lugarCrtl = require ('../controllers/lugar.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetLugar);
router.post('/post', setLugar);

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetLugar(req,res){
    lugarCrtl.fnGetLugar()
    .then(function (result){
        res.json(result);
    })
}
function setLugar(req, res) {
    let datos = req.body;
    lugarCrtl.setLugar(datos)
        .then(function (result) {
            res.json(result);
        });
}

module.exports = router;