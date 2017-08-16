'use strict';
var path = require('path');
var fs = require('fs');

var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");


module.exports = function(deployer) {

    var p1 = deployer.deploy(ConvertLib);
    deployer.link(ConvertLib, MetaCoin);
    var p2 = deployer.deploy(MetaCoin);


    Promise.all([p1, p2]).then(function() {

        var p11 = ConvertLib.deployed();
        var p12 = MetaCoin.deployed();


        Promise.all([p11, p12]).then(values => {
            var obj = {
                "ConvertLib": values[0].address,
                "MetaCoin": values[1].address,
            };
            var jsonPath = path.join(__dirname, '..', '/contracts/addresses.json');
            fs.writeFile(jsonPath, JSON.stringify(obj), function(err) {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });

};