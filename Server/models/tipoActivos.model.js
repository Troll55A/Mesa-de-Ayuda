'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTipoActivos: fnGetTipoActivos,
    setActivos:setActivos,
    existNomActivo:existNomActivo
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTipoActivos(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tipoactivo`
    )
}
function setActivos(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setTipoActivo(@descripcion)`
    ,datos)
}
function existNomActivo(datos) {
    console.log("Funcion existNomtipoActivos",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setTipoActivo(@descripcion)`
    ,datos)
}