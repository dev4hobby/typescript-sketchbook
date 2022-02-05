import { connect } from "../mongodb/connect";
const findDocumentTest = async () => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    const personCollection = db.collection('persons')
    const addressesCollection = db.collection('addresses')

    cursor = personCollection.find({name: 'D3fau1t'})
    const foundPersons = await cursor.toArray()
    console.log(foundPersons)

    cursor = addressesCollection.find({})
    const foundAddresses = await cursor.toArray()
    console.log(foundAddresses)
  } catch(e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

findDocumentTest()