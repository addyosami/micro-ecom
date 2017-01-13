const validator = require('validator'),
    _ = require('lodash');

var attributeValidator = function (item, schema) {
    let isValid = true,
        errMsg = {};

    _.forEach(item, function (itemValue, col) {
        if (schema[col] && schema[col].validate) {

            _.forEach(schema[col].validate, function (_, rule) {
                if (schema[col].validate[rule](itemValue)) {
                    if (!Array.isArray(errMsg[col])) {
                        errMsg[col] = []
                    }
                    errMsg[col].push(schema[col].errMsg[rule]);
                }
            });
        }
    });

    return {
        isValid: isValid,
        errMsg: errMsg
    };
};

module.exports = attributeValidator;
