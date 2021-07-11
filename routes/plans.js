const express = require('express');
const router = express.Router();

const {planService} = require('../services')

// http://localhost:5000/plans/getPlans
router.get('/getPlans',async (req,res)=>{
    let result = await planService.getPlans();
    res.status(200).send(result);
})

// http://localhost:5000/plans/savePlans
router.get('/savePlans',async (req,res)=>{
    try{
        let result = await planService.savePlans()

        res.status(200).send({saved:1});
    }catch(err){
        res.send(err)
    }
})

module.exports = router