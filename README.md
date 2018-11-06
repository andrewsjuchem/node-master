# node-master

# Requirements

Please create a simple "Hello World" API. Meaning:

1. It should be a RESTful JSON API that listens on a port of your choice. 
2. When someone posts anything to the route /hello, you should return a welcome message, in JSON format. This message can be anything you want. 

# Commands

**Generate Certificates**
```
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyoutkey.pem -out cert.pem
```

**Start Server**
```
NODE_ENV=testing node index.js
```
or
```
NODE_ENV=production node index.js
```

# API Ports

**Testing:**
* HTTP: 8000
* HTTPS: 8001

**Production:**
* HTTP: 9000
* HTTPS: 9001