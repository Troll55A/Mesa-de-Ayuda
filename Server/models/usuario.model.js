'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetUsuario: fnGetUsuario,
    setUsuario:setUsuario,
    existNomUsuario:existNomUsuario,
    }
console.log("funcion model")
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetUsuario(){
    return helpers.mysqlQuery('GET',conn_mysql,`SELECT * FROM usuarios`)
}

function setUsuario(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM usuarios`
    ,datos)
}
function existNomUsuario(datos) {
    console.log("Funcion existNomtipoActivos",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setUsuarios(@fecha,@idrol,@num_empleado,@nombre,@apellidoP,@apellidoM,@idlugar,@idarea,@email,@password,@status)`
    ,datos)
}

