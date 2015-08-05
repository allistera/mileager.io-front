import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function(){
    Ember.$('.tooltipped').tooltip({delay: 50});
    Ember.$('.parallax').parallax();
    Ember.$(".button-collapse").sideNav();
  }
});
