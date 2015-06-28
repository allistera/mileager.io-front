import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function(){
    Ember.$('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });

  }
});
