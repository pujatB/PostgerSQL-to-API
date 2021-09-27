const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION;

const dbName = process.env.DB_NAME

const init = async () => {
  console.log('connected to database!', dbName)
  let client = await MongoClient.connect(connectionUrl)
  return client.db(dbName)
}

  //console.log('connected to database!', dbName)
module.exports = { init };