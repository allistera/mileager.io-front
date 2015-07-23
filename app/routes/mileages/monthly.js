import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model: function(){
    return Ember.$.getJSON('/api/v1/mileages/monthly').then(function(data){
      return data;
    });
  }
});
