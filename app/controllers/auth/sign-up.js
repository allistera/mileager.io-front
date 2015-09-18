import Ember from 'ember';

export default Ember.Controller.extend({

  errors: function(){
    return [];
  }.property(),

  actions: {
    submit: function(){
      var router = this.get('target');
      var data = this.getProperties('email', 'password', 'password_confirmation');

      Ember.$.post('/api/users', { user: {email: data.email, password: data.password, password_confirmation: data.password_confirmation }},
        () => {
          router.transitionTo('auth.sign-up-success');
        } ).fail(() => {
          this.notify.warning('Please check your email and password and try again.');
        });

    }
  }
});
