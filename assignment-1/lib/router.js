/*
 *@author: Andrews Juchem
 *@description: Router
 */

// Modules
 const endpoint = require('./endpoint');

// Assign a endpoint to each valid route.
const router = {
  ping: endpoint.ping,
  hello: endpoint.hello,
};

// Check the router for a matching path for a endpoint. If one is not found, use the notFound endpoint instead.
function getEndpoint(path){
    return typeof(router[path]) !== 'undefined' 
        ? router[path] 
        : endpoint.notFound;
};

module.exports.getEndpoint = getEndpoint;