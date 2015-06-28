import Ember from 'ember';

export default Ember.Route.extend({
  setup: function() {
    this.get('session').invalidate();
  }
});
