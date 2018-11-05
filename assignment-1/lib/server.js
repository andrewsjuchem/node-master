/*
 *@author: Andrews Juchem
 *@description: Server
 */

// Modules
const url = require('url');
const router = require('./router');
const StringDecoder = require('string_decoder').StringDecoder;

// All the server logic for both the HTTP and HTTPS server
function serverRequest(req,res){

    // Parse the url
    const parsedUrl = url.parse(req.url, true);
  
    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
  
    // Get the query string as an object
    const queryStringObject = parsedUrl.query;
  
    // Get the HTTP method
    const method = req.method.toLowerCase();
  
    // Get the headers as an object
    const headers = req.headers;
  
    // Get the payload (HTTP body), if any
    let decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', function(data) {
        buffer += decoder.write(data);
    });
    req.on('end', function() {
        buffer += decoder.end();
  
        // Route the handler
        let chosenHandler = router.getHandler(trimmedPath);
  
        // Construct the data object to send to the handler
        let data = {
          'trimmedPath' : trimmedPath,
          'queryStringObject' : queryStringObject,
          'method' : method,
          'headers' : headers,
          'payload' : buffer
        };
  
        // Route the request to the handler specified in the router
        chosenHandler(data,function(statusCode,payload){
  
          // Use the status code returned from the handler, or set the default status code to 200
          let parsedStatusCode = typeof(statusCode) == 'number' ? statusCode : 200;
  
          // Use the payload returned from the handler, or set the default payload to an empty object
          let parsedPayload = typeof(payload) == 'object'? payload : {};
  
          // Convert the payload to a string
          let payloadString = JSON.stringify(parsedPayload);
  
          // Return the response
          res.setHeader('Content-Type', 'application/json');
          res.writeHead(parsedStatusCode);
          res.end(payloadString);
          console.log( 'Path: ' + trimmedPath + '; Status: ' + parsedStatusCode + ';');
        });
  
    });

};

module.exports.serverRequest = serverRequest;