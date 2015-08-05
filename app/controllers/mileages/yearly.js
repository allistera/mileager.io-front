import Ember from "ember";

export default Ember.Controller.extend({

  actions: {
    nextYear: function(){
      this.set('currentYear', this.get('currentYear') + 1);
    },
    prevYear: function(){
      this.set('currentYear', this.get('currentYear') - 1);
    }
  },

  currentYear: function(){
    return 1;
  }.property(),

  totalYears: function() {
    return 1;
  }.property(),

  chartOptions: { responsive: true },

  chartData: function() {
    var data = this.get('model');
    this.set('totalYears', data.mileages[0].expected.length / 12);

    var primaryColor = '#ee6e73';

    var sliceTo = (this.get('currentYear') === 1) ? 12 : (this.get('currentYear') + 1) * 12;

    var expected = data.mileages[0].expected.slice((this.get('currentYear') - 1) * 12, sliceTo);
    var actual = data.mileages[0].actual.slice((this.get('currentYear') - 1) * 12, sliceTo);

    var chartData = {
      labels: data.mileages[0].labels,
      datasets: [
        {
          label: "Expected",
          data: expected,
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff"
        },
        {
          label: "Actual",
          data: actual,
          fillColor: primaryColor,
          strokeColor: primaryColor,
          pointColor: primaryColor,
          pointStrokeColor: "#fff",
        }
      ]
    };

    return chartData;

  }.property('currentYear'),

  prevButton: function() {
    return this.get('currentYear') === 1 ;
  }.property('currentYear'),

  nextButton: function() {
    return (this.get('totalYears') <= this.get('currentYear'));
  }.property('currentYear'),

});
