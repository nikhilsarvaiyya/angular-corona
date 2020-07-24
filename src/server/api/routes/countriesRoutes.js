'use strict';
module.exports = function (app) {
  var country = require('../controllers/countriesController');

  // country Routes
  app.route('/countries')
    .get(country.list_all_countries)
    .post(country.create_a_country);


  app.route('/countries/:taskId')
    .get(country.read_a_country)
    .put(country.update_a_country)
    .delete(country.delete_a_country);
};
