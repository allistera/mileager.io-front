module.exports = function(app) {
  var express = require('express');
  var mileagesRouter = express.Router();

  mileagesRouter.get('/graph_data', function(req, res) {
    res.send({"mileages":[{"labels":["January","February","March","April","May","June","July","August","September","October","November","December"],"expected":[838,1671,2504,3337,4170,5003,5836,6669,7502,8335,9168,10001,10834,11667,12500,13333,14166,14999,15832,16665,17498,18331,19164,19997,20830,21663,22496,23329,24162,24995,25828,26661,27494,28327,29160,29993],"actual":[0,0,0,0,0,0,1000.0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]});
  });

  mileagesRouter.get('/monthly', function(req, res){
      res.send({"actual":[0,0,0,0,0,0,1000.0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"expected":[838,1671,2504,3337,4170,5003,5836,6669,7502,8335,9168,10001,10834,11667,12500,13333,14166,14999,15832,16665,17498,18331,19164,19997,20830,21663,22496,23329,24162,24995,25828,26661,27494,28327,29160,29993],"labels":["January","February","March","April","May","June","July","August","September","October","November","December"],"current_months_position":6});
  });

  mileagesRouter.get('/', function(req, res){
      res.send({"mileages":[{"id":2,"amount":1000.0,"date":"2015-07-14"}]});
  });

  mileagesRouter.post('/', function(req, res) {
    res.send({"mileages":[{"id":2,"amount":1200,"date":"2015-07-14"}]});
  });

  mileagesRouter.get('/:id', function(req, res) {
    res.send({
      'mileages': {
        id: req.params.id
      }
    });
  });

  mileagesRouter.put('/:id', function(req, res) {
    res.send({
      'mileages': {
        id: req.params.id
      }
    });
  });

  mileagesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/v1/mileages', mileagesRouter);
};
