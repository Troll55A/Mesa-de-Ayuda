'use strict'
const usuarioModels = require ('../models/usuario.model');
const bcrypt = require('bcrypt-nodejs');
const service = require('../modules/encryptToken');
module.exports = {
    fnGetUsuario: fnGetUsuario,
    setUsuario:setUsuario,
    iniciarSesion: iniciarSesion,
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
function iniciarSesion(datos) {
    return new Promise(function (resolve, reject) {
        
        if (datos.username && datos.nip) {
          
            usuarioModels.verificaExistUsr(datos) //Consultando a la BD
                .then(function (result) {
                    
                    if (result.err) {
                        reject("LoginUser", result.err)
                    } else {
                        let usuario = result.result;
                        
                        if (usuario.length > 0) {
                            console.log("Usuario",usuario);
                            // status 1 activado 0 desactivado , 2 esperando verificacion
                            if (usuario[0].status == 1) {

                                if (datos.nip && datos.username) {
                                   
                                    bcrypt.compare(datos.nip, usuario[0].password, function (err, res) {
                                        if (res == true) {
                                            let usuId = usuario[0].idusuario; //Viene de la BD
                                            datos.id_usuario_sistema = usuId; //Objeto que viene desde la funcion
                                            usuarioModels.ObtenerUsuarioId(datos)
                                                .then(function (result) {
                                                    if (result.err) {
                                                        resolve({ ok: false, mensaje: 'Error en Login Consola' })
                                                    } else {
                                                        let datosUst = result.result[0];
                                                        resolve({ ok: true, addenda: datosUst, token: service.createToken(datos) });
                                                    }

                                                })
                                        } else {
                                            resolve({ mensaje: 'Contraseña o correo Incorrectos', valido: 0 })
                                        }
                                    })
                                } else {
                                    //Manejo de errores de campos vacios
                                    let usuPwEmpty = !datos.nip ? 'Contraseña' : '';
                                    let usernameEmpty = !datos.username ? 'Correo' : '';
                                    resolve({ mensaje: 'El campo ' + usuPwEmpty + ' ' + usernameEmpty + ' ' + 'se encuentra vacio', valido: 0 });
                                }
                            } else {
                                resolve({ mensaje: 'Su cuenta se encuentra desactivada.', valido: 0 });
                            }

                        } else {
                          
                            resolve({ mensaje: 'El usuario  no se encuentra registrado', valido: 0 });
                        }
                    }
                })
        } else {
            resolve({ mensaje: 'Debe llenar todos los campos.', valido: 0 })
        }

    })
}