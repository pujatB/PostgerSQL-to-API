const db = connect("mongodb://localhost:27017/shop")
db.items.drop()


db.items.insertMany([
    { name:"bread",price:1.50,stock_left:50 },
    { name:"bananas",price:.40,stock_left:100 },
    { name:"apples",price:1,stock_left:150 },
    { name:"milk",price:2.50,stock_left:25 },
    { name:"sandwich",price:2,stock_left:5 },
    { name:"yogurt",price:1.50,stock_left:2 },
    { name:"shower-gel",price:3.20,stock_left:4 },
    { name:"ice-cream",price:1.10,stock_left:10 },
    { name:"potatoes",price:1.50,stock_left:21 },
    { name:"coffee",price:1.50,stock_left:2 }
    
])

