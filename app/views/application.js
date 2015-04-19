import Ember from "ember";

export default Ember.View.extend({
  didInsertElement: function(){
    this.$('.parallax').parallax();
  }
});
