import Ember from "ember";

export default Ember.Controller.extend({
    actions:{

        export: function() {
          Ember.$.get('/api/v1/mileages.csv');
        },

        delete: function(mile){
          mile.deleteRecord();
          mile.save().then(() => {
            this.notify.success('Mileage entry successfully deleted.');
          });
        }

    }
});
