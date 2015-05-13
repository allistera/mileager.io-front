import Ember from 'ember';
import User from '../../models/user.js';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    this.controller.set('model', this.store.createRecord('user'));
  }
});
