'use strict';
var web3 = require("./blockchain/connector.js");
var db = require("./db/mysql.js");
const co = require('co');





module.exports = {

    getAccounts: function(req, res) {
        try {

            let _result = {"account": web3.eth.accounts[0], "convertlib": web3.ConvertLib.address, "metacoin": web3.MetaCoin.address}

            res.json(_result);

        } catch (error) {
            res.statusCode = 500;
            res.end(error.message);
        }
    }


}