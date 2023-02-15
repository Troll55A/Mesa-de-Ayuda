'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetServicios: fnGetServicios,
    setServicios:setServicios,
    existNomServicios:existNomServicios
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetServicios(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM servicios`
    )
}
function setServicios(datos) {
    console.log("Funcion existNomLicen",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM servicios`
    ,datos)
}
function existNomServicios(datos) {
    console.log("Funcion existNomLicen",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `INSERT INTO servicios (idservicios,fecha_pedido,fecha_termino,idfolios,idtipo_servicio,descripcion,observaciones,idactivos,idlugar)
    VALUES (@idservicios,@fecha_pedido,@fecha_termino,@idfolios,@idtipo_servicio,@descripcion,@observaciones,@idactivos,@idlugar)`
    ,datos)
}