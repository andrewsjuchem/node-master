/*
 *@author: Andrews Juchem
 *@description: Handler
 */

const handlers = {};

handlers.hello = (data, callback) => {
    callback(200, { message: 'Hello world!' });
};

handlers.ping = function(data,callback){
    callback(200);
};

handlers.notFound = (data, callback) => {
    callback(404);
};

module.exports = handlers;