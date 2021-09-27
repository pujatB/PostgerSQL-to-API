const express = require('express');
const router = express.Router();

const Shop = require('../models/shop')

// shops index route
router.get('/', async (req, res) => {   
    try {
        const items = await Shop.all
        res.json({items})
    } catch(err) {
        res.status(500).json({err})
    }
})



//shops show route
router.get('/:name', async (req, res) => {
    try {
        console.log(req.params.name)
        const item = await Shop.findByName(req.params.name)
        res.json(item)
    } catch(err) {
        res.status(404).json({err})
    }
})

// shops show route
// router.get('/:id', async (req, res) => {
//     try {
//         console.log(req.params.id)
//         const item = await Shop.findById(req.params.id)
//         res.json(item)
//     } catch(err) {
//         res.status(404).json({err})
//     }
// })




// Create new item route
router.post('/', async (req, res) => {
    try {
        const item = await Shop.create(req.body.name, req.body.price,req.body.stock_left)
        res.json(item)
    } catch(err) {
        res.status(404).json({err})
    }
})

// delete item route
router.delete('/:id', async (req, res) => {
    try {
        const item = await Shop.findById(req.params.id)
        await item.destroy()
        res.status(204).json('Item deleted')
    } catch(err) {
        res.status(500).json({err})
    }
})

module.exports = router;

// // dogs update route
// router.patch('/:id', async (req, res) => {
//     try {
//         const dog = await Dog.findById(req.params.id)
//         const updatedDog = await dog.update()
//         res.json({dog: updatedDog})
//     } catch(err) {
//         res.status(500).json({err})
//     }
// })




