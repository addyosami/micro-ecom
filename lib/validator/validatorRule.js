var validator = require('validator');

var validatorRule = {
    required: validator.isEmpty,
    length: validator.isLength,
    format: validator.matches
};

module.exports = validatorRule;
