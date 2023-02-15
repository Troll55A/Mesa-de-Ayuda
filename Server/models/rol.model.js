'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetRol: fnGetRol,
    setRol: setRol,
    existNomRol: existNomRol

}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetRol(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM rol`
    )
}
function setRol(datos) {
    console.log("Funcion setRol",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM rol`
    ,datos)
}
function existNomRol(datos) {
    console.log("Funcion existNomRol",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setRol(@descripcion_rol)`
    ,datos)
}