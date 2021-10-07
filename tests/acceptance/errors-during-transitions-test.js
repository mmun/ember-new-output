import { test } from 'qunit';
import moduleForAcceptance from 'my-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | errors during transitions');

test('visiting /model-hook-error', function(assert) {
  visit('/model-hook-error');

  andThen(function() {
    assert.equal(currentURL(), '/model-hook-error');
  });
});

test('visiting / and then /model-hook-error', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });

  visit('/model-hook-error');

  andThen(function() {
    assert.equal(currentURL(), '/model-hook-error');
  });
});

test('visiting /rendering-error', function(assert) {
  visit('/rendering-error');

  andThen(function() {
    assert.equal(currentURL(), '/rendering-error');
  });
});

test('visiting /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
