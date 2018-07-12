var logger = require('winston');

module.exports = function () {
    return {
        info : function(msg) {
            logger.log({
                level: 'info',
                message: msg
            });
        },
        error : function(msg) {
            logger.log({
                
            })
        }
    }
}