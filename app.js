//estricto en la programacion
'use strict'
//expres ayuda a darle una estructura a node y no manejarlo con consola
const express = require('express')
const app = express();
const main = require('./Server/models/main.js');
const api = require('./api')

//cabeceras de acceso de http

const puerto = 5013;
app.set('port', (process.env.PORT || puerto))
main.start()
.then(function(){
    app.start = app.listen(app.get('port'),function(){
        console.log("app");
        console.log("ESCUCHANDO EN EL PUERTO",puerto);
    });
});
//rutas declaradas para el uso de ruta y archivos media
app.use(api);
module.exports = app;