"use strict";
const chai = require("chai");
const expect = chai.expect;
const co = require('co');

var MetaCoin = artifacts.require("./MetaCoin.sol");

var metacoin;


contract('MetaCoin', function(accounts) {

    before(function() {
        return co(function*() {
            metacoin = yield MetaCoin.deployed();
        });
    });

    it('This is how to get started', function(done) {
        var p1 = co(function*() {
            metacoin = yield MetaCoin.deployed();
            assert(metacoin.address !== undefined, "MetaCoin not deployed");
        });

        p1.then(done());
    });


    // it('This is how you handle events', function(done) {
    //     var p1 = co(function*() {
    //         yield metacoin.doSomething();
    //     });

    //     var p2 = new Promise(function(resolve, reject) {
    //         metacoin.SomethingHappenedEvent(function(error, result) {
    //             if (!error) {
    //                 // console.log(result);
    //                 resolve(result);
    //             } else { reject(error); }
    //         });
    //     });

    //     Promise.all([p1, p2]).then(values => {
    //         let result = values[1];
    //         assert(result.args.something == something, "something != event something");
    //         done();
    //     });

    // });

});