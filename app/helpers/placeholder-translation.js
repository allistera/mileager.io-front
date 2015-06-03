import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(value, placeholders) {
  return placeholders[value];
});
