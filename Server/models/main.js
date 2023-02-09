Promise = require('bluebird');
var mysql = require('mysql');
conn_mysql = null;

var fs = require('fs');
console.log("main")
var mysql_cred = JSON.parse(fs.readFileSync(__dirname + '/cred_mysql', 'utf8'));


module.exports.start = function() {
    return new Promise(function(resolve, reject) {
      var p1 = new Promise(function(resolve, reject) {
        conn_mysql = mysql.createConnection(mysql_cred);
    
        if (!conn_mysql) {
          reject(err);
          
        } else {
          conn_mysql.config.queryFormat = function (query, values) {
            
            if (!values) return query
            return query.replace(/\@(\w+)/g, function (txt, key) {
              if (values.hasOwnProperty(key)){
                return this.escape(values[key])
              
              }
        
              return txt
            }.bind(this))
          }
          resolve({conn: conn_mysql, sql: mysql});
         
        }
      });
  
      Promise.settle([p1]).then(function(results) {
        resolve({conn: conn_mysql});
      });
  
    });
  }
  