/*
 *@author: Andrews Juchem
 *@description: Router
 */

// Modules
 const handlers = require('./handler');

// Assign a handler to each valid route.
const router = {
  ping: handlers.ping,
  hello: handlers.hello,
};

// Check the router for a matching path for a handler. If one is not found, use the notFound handler instead.
function getHandler(path){
    return typeof(router[path]) !== 'undefined' 
        ? router[path] 
        : handlers.notFound;
};

module.exports.getHandler = getHandler;