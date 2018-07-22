
var util = require('util');

module.exports = {
    mongoUrl: util.format('mongodb://%s/ms-videos', process.env.DB || 'localhost'),
    servicePort: process.env.PORT || 5300,
    isMongoDebug: true
};