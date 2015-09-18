import Ember from 'ember';

export default Ember.Route.extend({

  model: function(params) {
    this.set('verification_code', params.verification_code);
  },

  setupController: function(controller) {

    return Ember.$.ajax({
        url: '/api/users/confirmation?confirmation_token=' + this.get('verification_code'),
        type: 'GET'
    }).success(function(){
      Ember.run(function() {
        controller.set('isValidated', true);
      });
    }).fail(function(){
      Ember.run(function() {
        controller.set('isValidated', false);
      });
    });

  }
});
