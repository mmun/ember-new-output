import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      get fieldThatThrows() {
        throw new Error('Error during rendering');
      }
    };
  }
});
