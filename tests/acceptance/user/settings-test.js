import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'car-mileager-frontend/tests/helpers/start-app';

var application;

module('Acceptance | user/settings', {
  beforeEach: function() {
    application = startApp();
    authenticateSession();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    invalidateSession();
  }
});

test('visiting /user/settings', function(assert) {
  visit('/user/settings');

  andThen(function() {
    assert.equal(currentURL(), '/user/settings');
  });
});

test('clicking on settings leads to settings panel', function(assert) {
    visit('/');
    click('.tooltipped a[href="/user/settings"]');

    andThen(function() {
      assert.equal(currentURL(), '/user/settings');
    });
});

test('settings are populated', function(assert) {
    visit('/user/settings');

    andThen(function() {
      assert.equal(find('[name="starting_date"]').val(), '2015-01-01');
      assert.equal(find('#term_length').val(), '24');
      click('#next');
      assert.equal(find('#yearly_mileage').val(), '10000');
      assert.equal(find('#starting_mileage').val(), '');
      click('#save');
    });
});

