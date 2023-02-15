'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetLicencias: fnGetLicencias,
    setLicencias: setLicencias,
    existNomLicen: existNomLicen
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetLicencias(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM licencias`
    )
}
function setLicencias(){
    return helpers.mysqlQuery('POST',conn_mysql,
    `SELECT * FROM licencias`
    )
}
function existNomLicen(datos) {
    console.log("Funcion existNomLicen",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setLicencias(@numserie_licencia,@tipo_licencia,@nombre,@folio_compra,@formato,@descripcion)`
    ,datos)
}