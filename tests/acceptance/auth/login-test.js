import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | auth/login', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /auth/login', function(assert) {
  visit('/auth/login');

  andThen(function() {
    assert.equal(currentURL(), '/auth/login');
  });
});
