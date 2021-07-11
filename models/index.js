const mongoose = require('mongoose');

const subPlans = {
    plan:String,
    price:Number    
}

const plans = {
    name:String,
    quantity:Number,
    additionalRate:Number,
    plans:[subPlans]

}


module.exports = mongoose.model('plans', plans);
