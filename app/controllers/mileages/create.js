import Ember from "ember";

export default Ember.Controller.extend({
    date: new Date().toLocaleDateString("en-GB"),

    actions:{
      submit: function(){
        var mileage = this.store.createRecord('mileage', {
          amount: this.get('amount'),
          date: this.get('date')
        });
        mileage.save().then(() => {
          this.transitionToRoute('mileages');
          this.notify.success('Created mileage entry successfully.');
        });
      }

    }
});
