'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTicket: fnGetTicket,
    setTicket:setTicket,
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTicket(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tiket`
    )
}
function setTicket(datos) {
    console.log("Funcion existNomTicket",datos)
    return helpers.mysqlQuery('POST', conn_mysql,
    `INSERT INTO tiket (idfolios,fecha_registro,idusuarios,idtipo_servicio,asunto,mensaje,foto1,foto2,foto3,foto4,solucion,firma,idstatusTicket)
    VALUES (@idfolios,@fecha_registro,@idusuarios,@idtipo_servicio,@asunto,@mensaje,@foto1,@foto2,@foto3,@foto4,@solucion,@firma,@idstatusTicket)`
    ,datos)
}