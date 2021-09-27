const { init } = require ('../dbConfig')
const { ObjectId } = require('mongodb')

class Shop {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.stock_left = data.stock_left
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                console.log("before init")
                const db = await init()
                console.log("after init")
                console.log(db.collection('items'))
                const shopsData = await db.collection("items").find().toArray()
                //const items = shopsData.map(d => new Shop({ ...d}))
                const items = shopsData.map(d => new Shop({ ...d, id: d._id }))
                resolve(items);
            } catch (err) {
                console.log(err);
                reject("Error retrieving items")
            }
        })
    }

    //Finding by item name - use the table name inside db.collection(#tablename) and not the database name
    static findByName (name) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                console.log("name: " + name)
                let shopData = await db.collection('items').find({ 'name':name }).toArray()
                console.log("shopData" + shopData[0])
                let item = new Shop({...shopData[0], id: shopData[0]._id});
                resolve (item);
            } catch (err) {
                reject('Item-name not found');
            }
        });
    }


    //Finding by id - use the table name inside db.collection(#tablename) and not the database name
    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let shopData = await db.collection('items').find({ "_id": ObjectId(id) }).toArray()
                let item = new Shop({...shopData[0], id: shopData[0]._id});
                resolve (item);
            } catch (err) {
                reject('Item-id not found');
            }
        });
    }

    static create(name, price, stock_left){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let shopData = await db.collection('items').insertOne({ name, price, stock_left })
                let newItem = new Shop(shopData.ops[0]);
                resolve (newItem);
            } catch (err) {
                reject('Error creating new item');
            }
        });
    }


    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                const db = await init();
                await db.collection('items').deleteOne({ _id: ObjectId(this.id) })
                resolve('Item was deleted')
            } catch (err) {
                reject('Item could not be deleted')
            }
        })
    }

//     update() {
//         return new Promise (async (resolve, reject) => {
//             try {
//                 const db = await init();
//                 let updatedDogData = await db.collection('dogs').findOneAndUpdate({ _id: ObjectId(this.id) }, { $inc: { age: 1 } }, { returnOriginal: false })
//                 let updatedDog = new Dog(updatedDogData.value);
//                 resolve (updatedDog);
//             } catch (err) {
//                 reject('Error updating dog');
//             }
//         });
//     }

    

}

module.exports = Shop;