import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function(){
    Ember.$('ul.monthly-tabs').tabs();
  }
});
