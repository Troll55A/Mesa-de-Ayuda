'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTipodeServicio: fnGetTipodeServicio,
    setTipodeServicio:setTipodeServicio
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTipodeServicio(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tipo_servicio`
    )
}
function setTipodeServicio(datos) {
    return helpers.mysqlQuery('POST', conn_mysql,
    `INSERT INTO tipo_servicio (Descripcion,Modalidad)VALUES(@Descripcion,@Modalidad)`
    ,datos)
}