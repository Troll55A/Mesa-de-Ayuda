'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    verificaExistUsr: verificaExistUsr,
    ObtenerUsuarioId: ObtenerUsuarioId,
}
function verificaExistUsr(num_empleado) {
    
    return helpers.mysqlQuery('GET', conn_mysql,
        `SELECT * FROM usuarios WHERE  num_empleado = @username and status = 1;`
        , num_empleado)
}
function ObtenerUsuarioId(id) {
    return helpers.mysqlQuery('GET', conn_mysql,
       // `call getUsrById(@id_usuario_sistema); `
    `SELECT u.*, r.descripcion_rol, r.clave FROM 
    usuarios u,
    rol r
    WHERE 
    idusuarios = @id_usuario_sistema and
    u.idrol = r.idrol
    and u.status = 1;`, id)
}