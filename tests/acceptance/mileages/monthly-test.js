import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | mileages/monthly', {
  beforeEach: function() {
    application = startApp();
    authenticateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    invalidateSession();
  }
});

test('visiting /mileages/monthly', function(assert) {
  visit('/mileages/monthly');

  andThen(function() {
    assert.equal(currentURL(), '/mileages/monthly');
  });
});

test('must be logged in', function(assert) {
  invalidateSession();
  visit('/mileages/monthly');

  andThen(function() {
    assert.notEqual(currentURL(), '/mileages/monthly');
  });
});

test('shows correct current month', function(assert) {

  visit('/mileages/monthly');

  andThen(function() {
    assert.equal(find('.monthly-container:first strong:first').text().trim(), 'Current Month: July');
  });
});

test('shows correct number of years', function(assert) {

  visit('/mileages/monthly');

  andThen(function() {
    assert.equal(find('.monthly-tabs:first li').length, 3);
  });
});

test('shows months in correct order', function(assert) {

  visit('/mileages/monthly');

  andThen(function() {
    assert.equal(find('.monthly-container__label:first').text().trim(), 'January');
    assert.equal(find('.monthly-container__label:last').text().trim(), 'December');
  });
});

test('navigates years', function(assert) {

  visit('/mileages/monthly');
  click('.monthly-tabs li:last a');

  andThen(function() {
      assert.equal(find('#year-3 .item:eq(7) div').text().trim(), '0%');
  });
});
