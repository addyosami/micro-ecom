var rek = require('rek'),

    // local modules
    validator = rek('microservices/plugins/attribute/validator/validator'),
    attributeSchema = rek('microservices/plugins/attribute/schema/schema');

var cmd = {
    addAttribute: function (msg, response) {
        // let seneca = this,
        //     attribute = seneca.make$('attribute');

        // temp data
        attribute = {};
        attribute.attribute_code = '';

        const { isValid, errMsg } = validator(attribute, attributeSchema);

        console.log(isValid);
        console.log(errMsg);
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
