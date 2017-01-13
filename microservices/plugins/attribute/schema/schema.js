var validator = require('validator');

var AttributeSchema = {
    attribute_code: {
        name: 'attribute_code',
        validate: {
            required: validator.isEmpty
        },
        errMsg: {
            required: 'Can not be blank'
        }
    }
};

module.exports = AttributeSchema;
