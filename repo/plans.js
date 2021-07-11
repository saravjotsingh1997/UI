const Plans = require('../models')

const savePlans = async (data) => {
    try{
        const result = await Plans.insertMany(data);
        return result;
    }catch(error){
        return error;
    }
}


const getPlans = async () => {
    try{
        const result = await Plans.find();
        return result;
    }catch(err){
        return err
    }
}

module.exports = {
    savePlans,
    getPlans
}