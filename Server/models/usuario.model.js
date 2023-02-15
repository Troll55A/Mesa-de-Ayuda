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
    `SELECT u.*, a.nombre_area, l.ubicacion, r.descripcion_rol FROM 
    usuarios u,
    area a,
    lugar l,
    rol r
     WHERE 
     u.idarea = a.idarea and
     u.idlugar = l.idlugar and
     u.idrol = r.idrol;`
    ,datos)
}
function existNomUsuario(datos) {
    console.log("Funcion existNomtipoActivos",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setUsuarios(@fecha,@idrol,@num_empleado,@nombre,@apellidoP,@apellidoM,@idlugar,@idarea,@email,@password,@status)`
    ,datos)
}

