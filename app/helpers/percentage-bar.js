import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(actual, expected, index, labels){

  var percentage = Math.round( ((actual / expected[index] ) * 100) );

  var template = '<div class="item progress-' + percentage +'">' +
                 '<div class="radial-inner-bg"> ' + percentage + '% ' +
                 '</div>' +
                 '</div>' +
                 '<div class="monthly-container__label"> ' + labels[index] +
                 '</div> ' +
                 '<div class="clearfix"></div>';

  return new Ember.Handlebars.SafeString(template);
});
