'use strict'
const rolModels = require ('../models/rol.model');
module.exports = {
    fnGetRol: fnGetRol,
    setRol:setRol
}

function fnGetRol(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        rolModels.fnGetRol()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar rol'}))
        })
    })
}
function setRol(datos){
    return new Promise(function (resolve) {
        rolModels.existNomRol(datos)
            .then(function (result) {
                console.log("👀",result.result[1])
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}