import { connect } from "../mongodb/connect";

const deleteTest = async() => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    const personCollection = db.collection('persons')
    await personCollection.insertMany([
      {name: 'Doppler', age: 27}, {name: 'Jane', age: 27}, {name: 'Vodka', age: 32}
    ])

    let result = await personCollection.deleteOne({name: 'Vodka'})
    console.log(result)
    result = await personCollection.deleteMany({})
    console.log(result)
  } catch(e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

deleteTest()