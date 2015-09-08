import Ember from 'ember';

export default Ember.Controller.extend({

  isValidated: 'pending',

  statusChanged: function(){
    if(this.isValidated) {
      this.confirmationSuccess();
    }else{
      this.confirmationFail();
    }
  }.observes('isValidated'),

  confirmationSuccess: function() {
    this.notify.success('Account verified, please try logging in.');
    this.transitionToRoute('auth.login');
  },

  confirmationFail: function() {
    this.notify.warning('Error validating accout, please try again.');
  }

});
