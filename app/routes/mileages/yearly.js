import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    return Ember.$.getJSON('/v1/mileages/graph_data').then(function(data){
      return data;
    });
  }
  
});
