/*
 *@author: Andrews Juchem
 *@description: Handler
 */

const endpoint = {};

endpoint.hello = (data, callback) => {
    callback(200, { message: 'Hello world!' });
};

endpoint.ping = function(data,callback){
    callback(200);
};

endpoint.notFound = (data, callback) => {
    callback(404);
};

module.exports = endpoint;