import Ember from "ember";

export default Ember.Controller.extend({
    actions:{

        delete: function(mile){
          mile.deleteRecord();
          mile.save().then(function(){
            this.notify.success('Mileage entry successfully deleted.');
          }.bind(this));
        }

    }
});