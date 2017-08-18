
'use strict';

var app = require('express')();
var http = require('http').Server(app);
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var fs = require('fs');
var serverPort = 8080;
var express = require("express")



module.exports = app; // for testing


// swaggerRouter configuration
var options = {
    swaggerUi: '/swagger.json',
    controllers: './api/controllers',
    useStubs: process.env.NODE_ENV === 'development' ? true : false // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync('./api/swagger/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(express.static('public'));

app.all('/', function(req, resp) {
    resp.redirect('/docs');
});

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function(middleware) {
    // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
    app.use(middleware.swaggerMetadata());

    // Validate Swagger requests
    app.use(middleware.swaggerValidator());

    // Route validated requests to appropriate controller
    app.use(middleware.swaggerRouter(options));

    // Serve the Swagger documents and Swagger UI
    app.use(middleware.swaggerUi());

    // Start the server
    http.listen(serverPort, function() {
        console.log('Your server is listening on port %d (http://0.0.0.0:%d)', serverPort, serverPort);
        console.log('Swagger-ui is available on http://0.0.0.0:%d/docs', serverPort);
    });
});

