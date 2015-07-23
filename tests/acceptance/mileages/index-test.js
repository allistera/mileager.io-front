import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | mileages/index', {
  beforeEach: function() {
    application = startApp();
    authenticateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    invalidateSession();
  }
});

test('visiting /mileages', function(assert) {
  visit('/mileages');

  andThen(function() {
    assert.equal(currentURL(), '/mileages');
  });
});

test('must be logged in', function(assert) {
  invalidateSession();
  visit('/mileages');

  andThen(function() {
    assert.notEqual(currentURL(), '/mileages');
  });
});

test('formats mileage entry', function(assert) {
  visit('/mileages');

  andThen(function() {
    assert.equal(find('.collection-item:first').text().trim(), '1000 miles on July 14, 2015 12:00 AM');
  });
});


test('deletes mileage entry', function(assert) {
  visit('/mileages');
  click('.collection-item:first a');

  andThen(function() {
    assert.equal(find('.center-align:first').text().trim(), 'No Miles Recorded');
  });
});
