'use strict'
const express = require('express');
const router = express.Router();
const rolCrtl = require ('../controllers/rol.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetRol);
router.post('/post', setRol);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetRol(req,res){
    rolCrtl.fnGetRol()
    .then(function (result){
        res.json(result);
    })
}

function setRol(req, res) {
    let datos = req.body;
    rolCrtl.setRol(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;