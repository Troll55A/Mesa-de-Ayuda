'use strict'
const usuarioModels = require ('../models/usuario.model');
const bcrypt = require('bcrypt-nodejs');
const service = require('../modules/encryptToken');
module.exports = {
    fnGetUsuario: fnGetUsuario,
    setUsuario:setUsuario,
}

function fnGetUsuario(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        usuarioModels.fnGetUsuario()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, usuario:result.result}: reject({ok:false, error:'Error al consultar usuario'}))
        })
    })
}
function setUsuario(datos){
    return new Promise(function (resolve) {
        usuarioModels.existNomUsuario(datos)
            .then(function (result) {
                console.log("😎", result);
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}
