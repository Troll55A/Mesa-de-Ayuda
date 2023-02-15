'use strict'
const RelacionModels = require ('../models/usuario_rel_servicio.model');
module.exports = {
    fnGetRelacion: fnGetRelacion,
    fnSetRelacion:fnSetRelacion
}

function fnGetRelacion(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        RelacionModels.fnGetRelacion()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, usuario:result.result}: reject({ok:false, error:'Error al consultar relacion de usuario y sevicio'}))
        })
    })
}

function fnSetRelacion(datos){
    return new Promise(function (resolve) {
        RelacionModels.existNomRelacion(datos)
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