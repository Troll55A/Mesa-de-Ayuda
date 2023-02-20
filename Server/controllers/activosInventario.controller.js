'use strict'
const activosModels = require ('../models/activosInventario.model');
module.exports = {
    fnGetActivos: fnGetActivos,
    agregaActivos : agregaActivos
}

function fnGetActivos(){
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        activosModels.fnGetActivos()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar activos'}))
        })
    })
}
function agregaActivos(datos){
    return new Promise(function (resolve) {
        activosModels.nomEquipo(datos)
            .then(function (result) {
               // console.log("👀",result.result[1])
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Mensaje: result.result[0] });
                }
            });
    });
}