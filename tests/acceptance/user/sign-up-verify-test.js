import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | /sign-up/verify/:verification_code', {
  beforeEach: function() {
    application = startApp();
    invalidateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting auth/sign-up/verify/:verification', function(assert) {
  visit('/auth/sign-up/verify/1212');

  andThen(function() {
    assert.equal(currentURL(), '/auth/login');
  });
});
