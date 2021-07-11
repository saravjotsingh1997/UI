const {plansRepo} = require('../repo');


const getPlans = () => {
    return plansRepo.getPlans();
}



const savePlans = () => {
    const data = [{
        name:"Silver",
        quantity:117,
        additionalRate:3,
        plans:[{
            plan:'12 Month',
            price:375
        },{
            plan:'6 Month',
            price:400
        },{
            plan:'1 Month',
            price:425
        }]
    },
    {
        name:"Gold",
        quantity:188,
        additionalRate:2.8,
        plans:[{
            plan:'12 Month',
            price:475
        },{
            plan:'6 Month',
            price:500
        },{
            plan:'1 Month',
            price:525
        }]
    },
    {
        name:"Platinum",
        quantity:306,
        additionalRate:2.0,
        plans:[{
            plan:'12 Month',
            price:575
        },{
            plan:'6 Month',
            price:590
        },{
            plan:'1 Month',
            price:625
        }]
    },
    {
        name:"Titanium",
        quantity:542,
        additionalRate:1.3,
        plans:[{
            plan:'12 Month',
            price:535
        },{
            plan:'6 Month',
            price:680
        },{
            plan:'1 Month',
            price:725
        }]
    }]
    
    return plansRepo.savePlans(data)
}


module.exports = {
    getPlans,
    savePlans
}