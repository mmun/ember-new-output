import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('model-hook-error');
  this.route('rendering-error');
  this.route('redirect-to');
});

export default Router;
