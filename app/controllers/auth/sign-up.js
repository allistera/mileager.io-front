import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function(){
      var router = this.get('target');
      var data = this.getProperties('email', 'password', 'password_confirmation');

      $.post('/users', { user: {email: data.email, password: data.password, password_confirmation: data.password_confirmation }}, function() {
        router.transitionTo('auth.login');
      }).fail(function(reason){
        this.set('errors', reason);
      }.bind(this));

    }
  }
});
