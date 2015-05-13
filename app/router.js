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

  this.resource('mileages', function(){


  });
});
