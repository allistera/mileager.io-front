module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.post('/', function(req, res) {
    res.status(201).send();
  });

  app.use('/api/users', usersRouter);
};
