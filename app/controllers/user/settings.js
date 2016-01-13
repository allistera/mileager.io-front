import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
      deleteAccount: function() {
        Ember.$.ajax({url:'/api/v1/settings/delete_account', type: 'put'}).done(
          () => {
            this.controllerFor('application').send('invalidateSession');
            this.notify.success('Successfully deleted account.');
          }
        );
      },
      changePassword: function() {

        var data = {
          current_password: this.get('model.current_password'),
          password: this.get('model.password'),
          password_confirmation: this.get('model.password_confirmation')
        };

        Ember.$.ajax({url:'/api/v1/users/1', type: 'put', data: data}).done(
          () => {
            this.notify.success('Successfully changed password.');
          }
        ).fail(
          () => {
            this.notify.error('Failed to change password, please try again.');
          }
        );

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
