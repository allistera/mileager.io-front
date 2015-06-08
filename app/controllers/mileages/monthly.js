import Ember from "ember";

export default Ember.Controller.extend({

  selectedYear: 0,

  actions: {

    changeYear: function(year){
      this.set('selectedYear', year - 1);
    }

  },

  percentage: function(){
    var expected = this.get('model.expected');
    var current_months_position = this.get('model.current_months_position');
    var actual = this.get('model.actual');

    return Math.round( ((actual[current_months_position] / expected[current_months_position] ) * 100) );
  }.property(),

  currentDate: function() {
    return new Date();

  }.property(),

  years: function() {
    return Array.apply(null, new Array(Math.ceil(this.get('model.actual').length / 12))).map(function(index, key) { return key + 1; });
  }.property(),

  currentYear: function(){
    var sliceTo = (this.get('selectedYear') === 0) ? 12 : (this.get('selectedYear') + 1) * 12;

    var models = this.get('model.actual').slice(this.get('selectedYear') * 12, sliceTo);

    return models;
  }.property('selectedYear')

});
