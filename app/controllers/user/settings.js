import Ember from "ember";

export default Ember.Controller.extend({
    placeholders: function(){
      return {
        DURATION: 'Contract Duration',
        STARTING_MONTH: 'Starting Date',
        STARTING_MILEAGE: 'Starting Mileage',
        YEARLY_MILEAGE: 'Yearly Mileage'
      };
    }.property(),

    actions:{
      submit: function(){

        var putData = {};

        this.get('model').map(function(setting){
          putData[setting.get('name')] = setting.get('value');
        });

        Ember.$.ajax({
          url: '/v1/settings/update',
          type: 'PUT',
          data: { settings: putData },
        }).done(function(){
          this.notify.success('Settings successfully updated.');
        }.bind(this) );

      }

    }
});
