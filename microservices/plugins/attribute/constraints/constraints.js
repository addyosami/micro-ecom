var constraints = {
    attribute_code: {
        required: true,
        length: {
            min: 6,
            max: 30,
            message: "must be at least 6 characters and not over 30 characters"
        },
        rormat: function (value) {
            
            
            return {
                isValid: isValid,
                message: errMsg
            };
        }
    }
};

module.exports = constraints;
