import Ember from 'ember';
import Mileage from '../../models/mileage.js';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('mileage');
  }

});
