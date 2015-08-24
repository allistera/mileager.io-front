export default function() {


    this.get('/api/v1/mileages', function() {
      return {"mileages":[{"id":2,"amount":1000.0,"date":"2015-07-14"}]};
    });

    this.post('/api/v1/mileages', function() {
      return {"mileages":[{"id":2,"amount":1000.0,"date":"2015-07-14"}]};
    });

    this.delete('/api/v1/mileages/:id', function() {
      return {};
    });

    this.get('/api/v1/mileages/graph_data', function() {
      return {"mileages":[{"labels":["January","February","March","April","May","June","July","August","September","October","November","December"],"expected":[838,1671,2504,3337,4170,5003,5836,6669,7502,8335,9168,10001,10834,11667,12500,13333,14166,14999,15832,16665,17498,18331,19164,19997,20830,21663,22496,23329,24162,24995,25828,26661,27494,28327,29160,29993],"actual":[0,0,0,0,0,0,3000.4000,5000,6000,7200,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}]};
    });

    this.get('/api/v1/mileages/monthly', function() {
      return {"actual":[0,0,0,0,0,0,1000.0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"expected":[838,1671,2504,3337,4170,5003,5836,6669,7502,8335,9168,10001,10834,11667,12500,13333,14166,14999,15832,16665,17498,18331,19164,19997,20830,21663,22496,23329,24162,24995,25828,26661,27494,28327,29160,29993],"labels":["January","February","March","April","May","June","July","August","September","October","November","December"],"current_months_position":6};
    });

    this.get('/api/v1/settings', function() {
      return {"settings":[{"starting_date":"2015-01-01","term_length":"24","yearly_mileage":"10000","starting_mileage":"","id":null}]};
    });

    this.post('/api/v1/settings', function() {
      return {"settings":[{"starting_date":"2015-01-01","term_length":"24","yearly_mileage":"10000","starting_mileage":"","id":null}]};
    });

    this.post('/api/users', function() {
      return {};
    });

    this.post('/api/users/sign_in', function() {
      return {};
    });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
