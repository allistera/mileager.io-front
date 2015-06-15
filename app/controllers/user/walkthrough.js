import Ember from "ember";

export default Ember.Controller.extend({
    actions:{
      walkthrough_next: function(){
        Ember.$('.mileage-details-header').addClass('active');
        Ember.$('.mileage-term-details').removeClass('active');
        Ember.$('.collapsible').collapsible();
      },
      save: function() {

        var data = {
          STARTING_MONTH: this.get('starting_date'),
          DURATION: this.get('term_length'),
          YEARLY_MILEAGE: this.get('yearly_mileage'),
          STARTING_MILEAGE: this.get('starting_mileage')
        };

        Ember.$.ajax({
          url: '/v1/settings/update',
          type: 'PUT',
          data: { settings: data, walkthrough: true},
        }).done(function(){
          this.notify.success('Settings successfully saved.');
          this.transitionTo('mileages.yearly');
        }.bind(this) );
      }
    }
});
