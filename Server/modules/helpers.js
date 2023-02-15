module.exports.mysqlQuery = function (tipo, c, query, d) {
    return new Promise(function(resolve, reject) {

      c.query(query, d, function(err, rs) {
        if(err) {
          console.log("err", err);
          resolve({err: true, description: err});
          //process.exit(1);
          //return reject( err );
        } else {
  
          if(tipo == 'GET') {
            resolve({err: false, result: rs});
          } else {
            resolve({err: false});
          }
        } 
      });
  
    });
  }