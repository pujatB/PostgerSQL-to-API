//const { query } = require('express');
const db = require('../dbConfig');

class Shop {
    constructor(data){
        this.id = data.id
        this.name = data.name;
        this.price = data.price;
        this.stock_left = data.stock_left;
    }

    static get all(){
        return new Promise (async (resolve,reject)=>{
            try {
                console.log("hello!")
                const shopData = await db.query('SELECT * FROM shop.items;')
                console.log("hi:" + items[0])
                const items = shopData.rows.map(d=> new Shop(d))
                resolve(items);   
            }catch (err) {
                reject("Error retrieving the shop data")
            }
        })
    }

} 

module.exports = Shop;