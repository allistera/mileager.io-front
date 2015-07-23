module.exports = function(app) {
  var express = require('express');
  var settingsRouter = express.Router();

  settingsRouter.get('/', function(req, res) {
    res.send({"settings":[{"starting_date":"2015-01-01","term_length":"24","yearly_mileage":"10000","starting_mileage":"","id":null}]});
  });

  app.use('/api/v1/settings', settingsRouter);
};
