'use strict';

var path = require('path');
var fs = require('fs')
var Web3 = require("web3");
var web3;

try {

    // ##########################################################################################################
    // ################################ Connect to testrpc Blockchain ###########################################
    // ##########################################################################################################

    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
    } else {
        // set the provider you want from Web3.providers
        web3 = new Web3(new Web3.providers.HttpProvider("http://testrpcName:8545"));
    }

    if (!web3.isConnected()) {
        throw new Error("web3 is not connected.")
    }

    web3.eth.defaulAccount = web3.eth.accounts[0];

    // ##########################################################################################################
    // ################################ Load deployed Contracts from truffle reposiroty #########################
    // ##########################################################################################################

    var addressPath = path.join(__dirname, '..', '..', '..', '..', '/truffle/contracts/addresses.json');
    var addresses = fs.readFileSync(addressPath).toString();
    addresses = JSON.parse(addresses);

    var abiPath;
    var abi_contract;
    var contract;
    var instance;

    var pathContracts = path.join(__dirname, '..', '..', '..', '..', '/truffle/build/contracts');
    var files = fs.readdirSync(pathContracts);

    console.log("\n")
    for (let x in files) {
        // if (files[x].toLowerCase() == "migrations.json" || files[x].toLowerCase() == "metacoin.json" || files[x].toLowerCase() == "convertlib.json") {
        //     continue;
        // }
        var contractName = files[x].replace('.json', '');
        abiPath = path.join(__dirname, '..', '..', '..', '..', '/truffle/build/contracts/', contractName + '.json');
        abi_contract = fs.readFileSync(abiPath).toString();
        abi_contract = JSON.parse(abi_contract).abi;
        contract = web3.eth.contract(abi_contract);
        instance = contract.at(addresses[contractName]);
        web3[contractName] = instance;
        console.log(contractName, "with address ", web3[contractName].address, " is loaded.");
    }
    console.log("\n")

} catch (err) {
    console.log(err);
    throw new Error(err);
}

module.exports = web3;