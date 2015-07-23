import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | user/sign up', {
  beforeEach: function() {
    application = startApp();
    invalidateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});


test('visiting auth/sign-up', function(assert) {
  visit('/auth/sign-up');

  andThen(function() {
    assert.equal(currentURL(), '/auth/sign-up');
  });
});
