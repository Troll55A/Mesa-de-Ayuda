'use strict'
const licenciasModels = require ('../models/licencias.model');
module.exports = {
    fnGetLicencias: fnGetLicencias,
    setLicencias: setLicencias
}

function fnGetLicencias(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        licenciasModels.fnGetLicencias()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, usuario:result.result}: reject({ok:false, error:'Error al consultar licencias'}))
        })
    })
}

function setLicencias(datos){
    return new Promise(function (resolve) {
        licenciasModels.existNomLicen(datos)
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