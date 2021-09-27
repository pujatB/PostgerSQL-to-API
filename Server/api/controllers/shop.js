const express = require('express');
const router = express.Router();

const Shop = require('../models/Shop');

//Shop index route
router.get('/',async (req,res)=>{
    try{
        const items = await Shop.all
        res.json({items})
    }catch(err){
        res.status(500).json({err})
    }
})

module.exports = router;
