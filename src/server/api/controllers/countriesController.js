'use strict';


var mongoose = require('mongoose')
var Country = mongoose.model('Countries');

exports.list_all_countries = function (req, res) {
  Country.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.create_a_country = function (req, res) {
  var new_country = new Country(req.body);
  new_country.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_country = function (req, res) {
  Country.findById(req.params.countryId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_country = function (req, res) {
  Country.findOneAndUpdate({ _id: req.params.countryId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_country = function (req, res) {


  Country.remove({
    _id: req.params.countryId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Country successfully deleted' });
  });
};
