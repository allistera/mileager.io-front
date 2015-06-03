import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.resource('auth', function() {
    this.route('login');
    this.route('sign-up');
  });

  this.resource('user', function() {
    this.route('settings')
  });

  this.resource('mileages', function(){
    this.route('create');
    this.route('yearly');
    this.route('monthly');
  });

});
