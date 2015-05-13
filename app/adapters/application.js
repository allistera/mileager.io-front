import DS from "ember-data";

export default DS.RESTAdapter.extend({
  namespace: 'v1',
  host: 'http://localhost:3000'
});
