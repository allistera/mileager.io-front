import Ember from "ember";

export default Ember.Handlebars.makeBoundHelper(function(actual, expected, index, labels){

  var percentage = Math.round( ((actual / expected[index] ) * 100) );

  return new Ember.Handlebars.SafeString(' <div class="item"> \
            <div class="radial-inner-bg progress-' + percentage +'"> \
              ' + percentage + '% \
            </div> \
          </div> \
          <div class="monthly-container__label"> \
             ' + labels[index] + '\
          </div> \
          <div class="clearfix"></div> \
          ');
});
