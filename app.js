var seneca = require('seneca')(),
    rek = require('rek'),

    // local modules
    attribute = rek('microservices/plugins/attribute/attribute'),
    dbConfig = rek('config/mongodb');

// Load plugins
seneca
    .use('entity')
    .use('mongo-store', dbConfig)
    .use(attribute);

seneca.ready(() => {
    seneca.act({
        role: 'attribute',
        cmd: 'add'
    }, function (err, result) {
        if (err) {
            return new Error('Something goes wrong when creating attribute');
        }
        console.log(result);
    });
});
