'use strict'
const activostipoModels = require ('../models/tipoActivos.model');
module.exports = {
    fnGetTipoActivos: fnGetTipoActivos,
    setActivos:setActivos
}

function fnGetTipoActivos(){
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        activostipoModels.fnGetTipoActivos()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, activos:result.result}: reject({ok:false, error:'Error al consultar Tipo de Activos'}))
        })
    })
}

function setActivos(datos){
    return new Promise(function (resolve) {
        activostipoModels.existNomActivo(datos)
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