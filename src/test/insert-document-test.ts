import { connect } from "../mongodb/connect"

const insertDocumentTest = async () => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    const personCollection = db.collection('persons')
    const addressesCollection = db.collection('addresses')

    const person = { name: 'D3fau1t', age: 27 }
    let result = await personCollection.insertOne(person)
    console.log(result)

    const address = { street: '123 Main St', city: 'Anytown' }
    result = await addressesCollection.insertOne(address)
    console.log(result)
  } catch(e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

insertDocumentTest()