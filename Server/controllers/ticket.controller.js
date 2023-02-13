'use strict'
const ticketModels = require ('../models/ticket.model');
module.exports = {
    fnGetTicket: fnGetTicket,
    setTicket:setTicket
}

function fnGetTicket(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        ticketModels.fnGetTicket()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Ticket'}))
        })
    })
}
function setTicket(datos){
    return new Promise(function (resolve) {
        ticketModels.setTicket(datos)
            .then(function (result) {
                console.log("👀",result)
                if (!result.err) {
                    resolve({ ok: false, mensaje: 'Se agrego Correctamente' });
                
                }
            });
    });
}