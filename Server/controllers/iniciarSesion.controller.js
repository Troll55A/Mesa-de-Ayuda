'use strict'
const initSesionModels = require ('../models/iniciarSesion.model');
const bcrypt = require('bcrypt-nodejs');
const service = require('../modules/encryptToken');
module.exports = {
    iniciarSesion: iniciarSesion,
}
function iniciarSesion(datos) {
    return new Promise(function (resolve, reject) {
        
        if (datos.username && datos.nip) {
          
            initSesionModels.verificaExistUsr(datos) //Consultando a la BD
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
                                            let usuId = usuario[0].idusuarios; //Viene de la BD
                                            console.log("hola",usuario[0]);
                                            datos.id_usuario_sistema = usuId; //Objeto que viene desde la funcion
                                            console.log(datos);
                                            initSesionModels.ObtenerUsuarioId(datos)
                                                .then(function (result) {
                                                    if (result.err) {
                                                        resolve({ ok: false, mensaje: 'Error en Login Consola' })
                                                    } else {
                                                        let datosUst = result.result[0];
                                                        console.log("prueba",datosUst);
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