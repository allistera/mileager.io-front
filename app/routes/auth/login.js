import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      var walkthrough = this.get('session.secure.walkthrough');
      if(walkthrough){
        this.transitionTo('user.settings');
      }else{
        this.transitionTo('mileages.yearly');
      }
    },
    sessionAuthenticationFailed: function(error) {
      this.controllerFor('application').set('loginErrorMessage', error.message);
    }
  }
});
