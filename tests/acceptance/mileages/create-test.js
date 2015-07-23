import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | mileages/create', {
  beforeEach: function() {
    application = startApp();
    authenticateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    invalidateSession();
  }
});

test('visiting /mileages/create', function(assert) {
  visit('/mileages/create');

  andThen(function() {
    assert.equal(currentURL(), '/mileages/create');
  });
});

test('must be logged in', function(assert) {
  invalidateSession();
  visit('/mileages/create');

  andThen(function() {
    assert.notEqual(currentURL(), '/mileages/create');
  });
});

test('current date should be prefilled', function(assert) {
  visit('/mileages/create');

  andThen(function() {
      assert.equal(find('#date').val(), new Date().toLocaleDateString("en-GB"));
  });
});

test('creates new mileage entry', function(assert) {
  visit('/mileages/create');
  fillIn('#amount', '1200');
  click('button.btn');

  andThen(function() {
      assert.equal(currentURL(), '/mileages');
  });
});
