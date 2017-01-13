var rek = require('rek'),

    // local modules
    validator = rek('microservices/plugins/attribute/validator/validator'),
    constraints = rek('microservices/plugins/attribute/constraints/constraints');

var cmd = {
    addAttribute: function (msg, response) {
        // let seneca = this,
        //     attribute = seneca.make$('attribute');

        // temp data
        attribute = {};
        attribute.attribute_code = '';

        const { isValid, errMsg } = Validator.validate(attribute, constraints);
        // if (!isValid) {
        //     response(null, {
        //         code: 1,
        //         errMsg: errMsg
        //     })
        // }

        // attribute.save$((err, savedProduct) => {
        //     if (err) {
        //         return response(err, {});
        //     }
        //     response(null, { result: 'save successfully!' });
        // });
    }
};

cmd.addAttribute();

// module.exports = cmd;
