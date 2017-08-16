'use strict';

var should = require('should');
var request = require('supertest');
// var request = require('superagent');
var server = require('../../../app');
var fs = require('fs');
var path = require('path');
var web3 = require('/src/swagger/api/controllers/blockchain/connector.js');



var ma = web3.eth.accounts[0];
var msba = web3.eth.accounts[1];
var sm2bc = web3.eth.accounts[2];
var paa = web3.eth.accounts[3];
var eba = web3.eth.accounts[4];
var mta = web3.eth.accounts[5];


// marketauthority = 1
// msba = 2
// sm2bc = 3
// paa = 4
// eba = 5
// mta = 6
var maType = 1;
var msbaType = 2;
var sm2bcType = 3
var paaType = 4;
var ebaType = 5;
var mtaType = 6;


function log(msg) {
    try {
        if (msg instanceof Object) {
            msg = JSON.stringify(msg);
        }
        fs.writeFile("/src/swagger/log.json", msg, function(err) {
            if (err) {
                return err;
            }

            console.log("The file was saved!");
        });
    } catch (err) {
        return err;
    }
}

describe('Testing Metacoin', function() {


    it(' test ', function(done) {

        request(server)
            .get('/info/getAccounts')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(error, result) {
                if (error) {
                    console.log(error);
                }
                // console.log(result)
                result.body.account.should.eql(web3.eth.accounts[0]);
                result.body.convertlib.should.eql(web3.ConvertLib.address);
                result.body.metacoin.should.eql(web3.MetaCoin.address);
                done();
            });
    });



});