var cmd = {
    addAttribute: function (msg, response) {
        let seneca = this,
            product = seneca.make$('Product');

        product.name = 'product 1';
        product.price = 130;

        product.save$((err, savedProduct) => {
            if (err) {
                return response(err, {});
            }
            response(null, { result: 'save successfully!' });
        });
    }
};

module.exports = cmd;
