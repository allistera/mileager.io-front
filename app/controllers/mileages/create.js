import Ember from "ember";

export default Ember.Controller.extend({
    actions:{
      submit: function(){
        var mileage = this.store.createRecord('mileage', {
          amount: this.get('amount'),
          date: this.get('date')
        });
        mileage.save().then(function(){
          this.transitionToRoute('mileages');
          this.notify.success('Created mileage entry successfully.');
        }.bind(this) );
      }

    }
});
