var rek = require('rek'),

    // local modules
    attributeCmd = rek('microservices/plugins/attribute/lib/cmd');

var attribute = function (options) {
    let seneca = this;

    seneca.add({
        role: 'attribute',
        cmd: 'add'
    }, attributeCmd.addAttribute.bind(seneca));

    return 'attribute';
};

module.exports = attribute;
