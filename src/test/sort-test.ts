import { connect } from "../mongodb/connect"

const sortTest = async() => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    const personsCollection = db.collection('persons')
    await personsCollection.createIndex({name: 1, age: -1})
    await personsCollection.deleteMany({})
    await personsCollection.insertMany([
      {name: 'Doppler', age: 27}, {name: 'Jane', age: 27}, {name: 'Vodka', age: 32}
    ])

    const cursor = personsCollection.find({name: 'Doppler'}).sort({age: -1})
    const result = await cursor.toArray()
    console.log(result)
  } catch(e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

sortTest()