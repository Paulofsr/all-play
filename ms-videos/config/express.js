
var express     = require('express');
var load        = require('express-load');
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var logger      = require('winston');
var appSettings = require('./settings');

module.exports = function () {
    var app = express();

    app.set('port', appSettings.servicePort);

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(require('method-override')());
    app.use(morgan('dev'));


    // app.use(function (req, res, next) {
    //     var origin = req.headers.origin;
    //     logger.log('info', '[origin-option]', origin);
    //     if (origin && (origin.substring(origin.length - 14) || origin.includes("//localhost"))) {
    //         res.setHeader('Access-Control-Allow-Origin', origin);
    //     }
    //     res.header('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Headers, Access-Control-Allow-Methods');
    //     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,PATCH');
        
    //     next();
    // });

    app.options("*", function (req, res, next) {
        res.send(200);
    });

    // app.use(function (req, res, next) {
    //     var token = "";
    //     logger.log('info', '[authorization-query] ', req.query.authorization);
    //     logger.log('info', '[authorization-header] ', req.headers['authorization']);
    //     var token = req.headers['authorization'] ? req.headers['authorization'] : req.query.authorization;
    //     if (token && token.includes("6EA36EE020692818E1EBD043F9569445")) {
    //         logger.log('info', '[authorization-SYSTEM]');
    //         next();
    //     } else {
    //         tokenHelper.checkToken(token)
    //             .then(function(response) { next(); })
    //             .catch(function(error) { res.status(403).json({}); });
    //     }
    // });

    load('controllers', { cwd: 'api' })
        .then('routes')
        .into(app);

    return app;
};

