'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetActivos: fnGetActivos,
    agregaActivos : agregaActivos,
    nomEquipo : nomEquipo
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetActivos(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT a.*, d.modelo,d.marca,d.num_serie, t.descripcion as tipo_activo_desc FROM 
    activos a,
    detallepc d,
    tipoactivo t
     WHERE 
     a.iddetallepc = d.iddetallepc and a.idtipoactivo = t.idtipoactivo;`
    )
}
function agregaActivos(datos) {
    return helpers.mysqlQuery('POST', conn_mysql,
   // `INSERT INTO activos (idlugar,idarea,nombre_propietario, nombre_equipo, num_empleado, password, fecha_mantenimiento, valor_monetario, estado, descripcion, tipo_de_conexion, iddetallepc, idLicencias, idtipoactivo, host_teamviewer, password_teamviewer, calculoEstimado, Pertenencia) 
   // VALUES (@idlugar,@idarea,@nombre_propietario, @nombre_equipo, @num_empleado, @password, @fecha_mantenimiento, @valor_monetario, @estado, @descripcion, @tipo_de_conexion, @iddetallepc, @idLicencias, @idtipoactivo, @host_teamviewer, @password_teamviewer, @calculoEstimado, @Pertenencia)`
   `SELECT * FROM activos`
   ,datos)
}

function nomEquipo(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
   `call setActivo(@idlugar,@idarea,@nombre_propietario, @nombre_equipo, @num_empleado, @password, @fecha_mantenimiento, @valor_monetario, @estado, @descripcion, @tipo_de_conexion, @iddetallepc, @idLicencias, @idtipoactivo, @host_teamviewer, @password_teamviewer, @calculoEstimado, @Pertenencia)` 
   ,datos)
}