import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function(){
    Ember.$('ul.tabs').tabs();
    Ember.$('.tooltipped').tooltip({delay: 50});
  }
});
