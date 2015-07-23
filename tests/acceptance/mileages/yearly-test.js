import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | mileages/yearly', {
  beforeEach: function() {
    application = startApp();
    authenticateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    invalidateSession();
  }
});

test('visiting /mileages/yearly', function(assert) {
  visit('/mileages/yearly');

  andThen(function() {
    assert.equal(currentURL(), '/mileages/yearly');
  });
});

test('must be logged in', function(assert) {
  invalidateSession();
  visit('/mileages/yearly');

  andThen(function() {
    assert.notEqual(currentURL(), '/mileages/yearly');
  });
});

test('shows correct year', function(assert) {

  visit('/mileages/yearly');

  andThen(function() {
    assert.equal(find('.year-pagination').text().trim(), 'Year 1 of 3');
  });
});
