'use strict';

module.exports = function(app) {
    app.use('/api/customers', require('./api/customers'));

    app.use('*', (req, res) => {
        res.status(404).json({ "err": "page not found" });
    });
};