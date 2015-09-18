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
          starting_date: this.get('model.starting_date'),
          term_length: this.get('model.term_length'),
          yearly_mileage: this.get('model.yearly_mileage'),
          starting_mileage: this.get('model.starting_mileage')
        };

        Ember.$.ajax({
          url: '/api/v1/settings',
          type: 'POST',
          data: { settings: data, walkthrough: true},
        }).done(() => {
            Ember.run(() => {
                this.notify.success('Settings successfully saved.');
                this.transitionToRoute('mileages.yearly');
            });
        } );
      }
    }
});
