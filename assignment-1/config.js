/*
 *@author: Andrews Juchem
 *@description: Server Config
 */

 const environments = {};

 // testing environment
 environments.testing = {
    envName: 'testing',
    http: {
        port: 8000
    },
    https: {
        port: 8001,
        keyFile: './https/key.pem',
        certFile: './https/cert.pem'
    }
 };

 // production environment
 environments.production = {
    envName: 'production',
    http: {
        port: 9000
    },
    https: {
        port: 9001,
        keyFile: './https/key.pem',
        certFile: './https/cert.pem'
    }
};

// Determine which environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' 
    ? process.env.NODE_ENV.toLowerCase() 
    : 'testing';

// Check if the current environment is one of the environments above
const selectedEnvironment = typeof(environments[currentEnvironment]) == 'object' 
    ? environments[currentEnvironment] 
    : environments.testing;

// Export the module
module.exports = selectedEnvironment;