const Model = require('../models/Model');

const que1Controller = (req, res) => {
    const { number } = req.body;
    const que2 =  Model. deletedelete(number);
   
    res.json({ que2 });
};



module.exports = { que1Controller };

