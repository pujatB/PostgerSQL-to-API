const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;
const server = express();
server.use(cors());
server.use(express.json());

const shopRoutes = require('./controllers/shop');
server.use('/shop',shopRoutes)


//Root route
server.get('/',(req,res)=>{
    res.send('Hello World!')
})

module.exports = server;


