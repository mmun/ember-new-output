import Ember from 'ember';

export default Ember.Route.extend({
  model() { 
    throw new Error('Error during model hook');
  }
});
