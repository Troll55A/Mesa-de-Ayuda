'use strict'
const express = require('express');
const router = express.Router();
const ticketCrtl = require ('../controllers/ticket.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getticket',fnGetTicket);
router.post('/post', setTicket);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetTicket(req,res){
    ticketCrtl.fnGetTicket()
    .then(function (result){
        res.json(result);
    })
}
function setTicket(req, res) {
    let datos = req.body;
    ticketCrtl.setTicket(datos)
        .then(function (result) {
            res.json(result);
        });
}

module.exports = router;