import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    routeName: true
  },

  model(params) { 
    this.transitionTo(params.routeName);
  }
});
