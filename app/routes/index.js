import Ember from "ember";

var IndexRoute = Ember.Route.extend({
  beforeModel: function(){
    if(this.get('session').isAuthenticated) {
      this.transitionToRoute('mileages.yearly');
    }
  }
});
export default IndexRoute;
