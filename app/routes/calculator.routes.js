/**
 * Created by kaizzige on 1/9/15.
 */

var calculator = require('../controller/add.controller.js');

module.exports = function (app) {
    app.post('/add', calculator.add);
}
