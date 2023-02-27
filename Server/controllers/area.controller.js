'use strict'
const AreaModels = require ('../models/area.model');
module.exports = {
    fnGetArea: fnGetArea,
    fnagregaArea : fnagregaArea,
    fnEliminarArea : fnEliminarArea
    
}

function fnGetArea(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise(function (resolve) {
        AreaModels.fnGetArea()
            .then(function (result) {
                if (result.err) {
                    resolve({ ok: false, error: 'No se pudo obtener las areas' });
                } else {
                    resolve({ ok: true, addenda: result.result });
                }
            });
    });
}
function fnagregaArea(datos){
    console.log("fnagregaArea",datos);
    return new Promise(function (resolve) {
        AreaModels.existNomArea(datos)
            .then(function (result) {
                console.log("👀",result.result[1])
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}

async function fnEliminarArea(datos) {
    try {
        const eliminarArea = await AreaModels.fnEliminarArea(datos);
        if (!eliminarArea.err) {
            return ({ mensaje: 'Se ha eliminado correctamente el area', ok: true })
        } else {
            return ({ mensaje: 'Error en eliminar area' + error, ok: false })
        }


    } catch (error) {
        return ({ mensaje: 'Error en eliminar area' + error, ok: false })
    }
}