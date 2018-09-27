var express = require('express');
var bodyParser = require('body-parser'); 
var fs = require("fs");

var app = express();
var fs = require("fs");
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



///////////////////////////////////////////////////////Get People Data////////////////////////////
app.get('/people', function (req, response) {
// Get content from file
 var dashboardContents = fs.readFileSync("jsondb/people.json");
// Define to JSON type
 var dashboard = JSON.parse(dashboardContents);
  response.send(dashboard);
});


/**
 * server init
 */
var server = app.listen(3200, function () {
    console.log('api listening on ', server.address().port);
});