import Ember from "ember";

export default Ember.Controller.extend({
    actions:{

        export: function() {
          Ember.$.get('/api/v1/mileages.csv').done((data) => {
            var blob = new Blob([data]);
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'mileager-io-_' + new Date()+ '.csv';
            link.click();
          });
        },

        delete: function(mile){
          mile.deleteRecord();
          mile.save().then(() => {
            this.notify.success('Mileage entry successfully deleted.');
          });
        }

    }
});
