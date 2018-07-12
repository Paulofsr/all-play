const express = require('express');
const app = express();
const appSettings = require('./config/settings');
var morgan = require('morgan');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.listen(appSettings.servicePort, function () {
    console.log('Ok! Server started.' + appSettings.servicePort);
})
