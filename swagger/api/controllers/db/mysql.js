const mysql = require("mysql");
var web3 = require("../blockchain/connector.js");

var db_config = {
    connectionLimit: 10,
    host: "172.17.0.2",
    user: "root",
    password: "mypassword",
    database: "authorities"
};

global.db_connection_pool = null;


function getConnection() {
    return new Promise(function(resolve, reject) {
        if (global.db_connection_pool) {
            global.db_connection_pool.getConnection(function(err, connection) {
                if (err) {
                    console.log('error when connecting to db:', err);
                    setTimeout(getConnection, 2000);
                } else {
                    return resolve(connection);
                }
            });
        } else {
            global.db_connection_pool = mysql.createPool(db_config);
            global.db_connection_pool.getConnection(function(err, connection) {
                if (err) {
                    console.log('error when connecting to db:', err);
                    setTimeout(getConnection, 2000);
                } else {
                    return resolve(connection);
                }
            });
        }
    });
}

// getAllPersons();
// function getAllPersons() {
//     getConnection().then(function(connection) {
//         connection.query("select * from Persons", function(err, rows, fields) {
//             connection.release();
//             if (err) {
//                 console.log(err);
//                 reject(err);
//             } else {
//                 console.log(rows)
//             }
//         });
//     }, function(err) {
//         reject(err);
//     });
// }

// module.exports = {

//     getAllPesons: function(_estoken) {
//         return new Promise(function(resolve, reject) {
//             getConnection().then(function(connection) {
//                 connection.query("select disburseAmount,timestamp from disburse where estoken = ?", _estoken, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 reject(err);
//             });
//         });
//     },

// }


//     insertIntoDisburse: function(_post) {
//         return new Promise(function(resolve, reject) {
//             if (!_post) {
//                 return reject(new Error('missing post data'));
//             }

//             getConnection().then(function(connection) {
//                 connection.query('insert ignore into disburse set ?', _post, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 reject(err);
//             })
//         })
//     },

//     getAllDisburses: function(_estoken) {
//         return new Promise(function(resolve, reject) {
//             getConnection().then(function(connection) {
//                 connection.query("select disburseAmount,timestamp from disburse where estoken = ?", _estoken, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 reject(err);
//             });
//         });
//     },

//     getDisburses: function(_energysupplier) {
//         return new Promise(function(resolve, reject) {
//             getConnection().then(function(connection) {
//                 connection.query("select disburseAmount, timestamp, estoken from disburse where energysupplier = ?", _energysupplier, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 reject(err);
//             });
//         });
//     },

//     getEstokensByEnergySupplier: function(_energysupplier) {
//         return new Promise(function(resolve, reject) {
//             getConnection().then(function(connection) {
//                 console.log(_energysupplier, 123123);
//                 connection.query("select estoken,total from estokens where energysupplier = ?", _energysupplier, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 reject(err);
//             });
//         });
//     },

//     insertIntoEstokens: function(_post) {
//         return new Promise(function(resolve, reject) {
//             if (!_post) {
//                 return reject(new Error('missing post data'));
//             }

//             getConnection().then(function(connection) {
//                 connection.query('insert ignore into estokens set ?', _post, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     insertIntoShareholders: function(_post) {
//         return new Promise(function(resolve, reject) {
//             if (!_post) {
//                 return reject(new Error('missing post data'));
//             }

//             getConnection().then(function(connection) {
//                 connection.query('insert ignore into shareholders set ?', _post, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },


//     updateShareholders: function(_estoken, _shareholder, _share) {
//         return new Promise(function(resolve, reject) {


//             getConnection().then(function(connection) {
//                 var query = connection.query(' INSERT INTO shareholders (estoken, shareholder, share) VALUES (?,?,?) ON DUPLICATE KEY UPDATE share=?;', [_estoken, _shareholder, _share, _share], function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//                 // console.log(query.sql,123);
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     insertIntoIncome: function(_post) {
//         return new Promise(function(resolve, reject) {
//             if (!_post) {
//                 return reject(new Error('missing post data'));
//             }

//             getConnection().then(function(connection) {
//                 connection.query('insert ignore into income set ?', _post, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     getSumOfDisburses: function(_post) {
//         return new Promise(function(resolve, reject) {
//             if (!_post) {
//                 return reject(new Error('missing post data'));
//             }

//             getConnection().then(function(connection) {
//                 connection.query('select sum(disburseAmount) as cumulativeDisburseAmount from disburse where estoken = ?', _post, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     getAllEnergySystemTokens: function() {
//         return new Promise(function(resolve, reject) {


//             getConnection().then(function(connection) {
//                 connection.query('select * from estokens', function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     getAllMyESTokensByShareholder: function(_post) {
//         return new Promise(function(resolve, reject) {
//             if (!_post) {
//                 return reject(new Error('missing post data'));
//             }
//             console.log(_post);
//             getConnection().then(function(connection) {
//                 connection.query('select estoken, share from shareholders where shareholder = ?', _post, function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },

//     getIncomeByEnergyShareToken: function(_user, _estoken) {
//         return new Promise(function(resolve, reject) {

//             console.log(_user, 3);
//             console.log(_estoken, 4);
//             getConnection().then(function(connection) {
//                 connection.query('select income, timestamp from income where shareholder = ? and estoken = ?', [_user, _estoken], function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     getIncomes: function(_user) {
//         return new Promise(function(resolve, reject) {

//             getConnection().then(function(connection) {
//                 connection.query('select income, timestamp, estoken from income where shareholder = ?', [_user], function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
//     getSumOfIncomeByESTokenRequest: function(_user, _estoken) {
//         return new Promise(function(resolve, reject) {

//             getConnection().then(function(connection) {
//                 connection.query('select sum(income) as cumulativeIncome from income where shareholder = ? and estoken = ?', [_user, _estoken], function(err, rows, fields) {
//                     connection.release();
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     } else {
//                         resolve(JSON.stringify(rows));
//                     }
//                 });
//             }, function(err) {
//                 console.log(err);
//                 reject(err);
//             })
//         })
//     },
// }