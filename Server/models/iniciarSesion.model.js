'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    verificaExistUsr: verificaExistUsr,
    ObtenerUsuarioId: ObtenerUsuarioId,
}
function verificaExistUsr(email) {
    
    return helpers.mysqlQuery('GET', conn_mysql,
        `SELECT * FROM usuarios WHERE  email = @username and status = 1;`
        , email)
}
function ObtenerUsuarioId(id) {
    return helpers.mysqlQuery('GET', conn_mysql,
       // `call getUsrById(@id_usuario_sistema); `
       `SELECT * FROM usuarios WHERE  idusuarios = @id_usuario_sistema  and status = 1;`
        , id)
}