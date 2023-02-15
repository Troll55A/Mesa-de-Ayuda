'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetRelacion: fnGetRelacion,
    fnSetRelacion:fnSetRelacion,
    existNomRelacion:existNomRelacion

}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetRelacion(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM usuarios_rel_servicios`
    )
}
function fnSetRelacion(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM  usuarios_rel_servicios`
    ,datos)
}
function existNomRelacion(datos) {
    console.log("Funcion existNomRelacion",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `INSERT INTO usuarios_rel_servicios (@idusuarios,@idservicios)VALUES(idusuarios,idservicios)`
    ,datos)
}