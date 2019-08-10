/*
 *@author: Andrews Juchem
 *@description: RESTful API
 */

// Modules
const fs = require('fs');
const http = require('http');
const https = require('https');
const config = require('./config');
const server = require('./lib/server');

// HTTP example
/************************/

// Instantiate the HTTP server
const httpServer = http.createServer (server.processRequest);

// Start the HTTP server, and listen on some port
httpServer.listen(config.http.port,function(){
    console.log('The HTTP server is running on port ' + config.http.port);
});

// HTTPS example
/************************/

// Instantiate the HTTPS server
const httpsServerOptions = {
    key: fs.readFileSync(config.https.keyFile),
    cert: fs.readFileSync(config.https.certFile)
};
const httpsServer = https.createServer (httpsServerOptions, server.processRequest);
  
// Start the HTTPS server
httpsServer.listen(config.https.port,function(){
   console.log('The HTTPS server is running on port ' + config.https.port);
});