import { connect } from "../mongodb/connect"

const makeCollectionsTest = async () => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    const personCollection = db.collection('persons')
    const addressesCollection = db.collection('addresses')
    console.log(personCollection, addressesCollection)
  } catch (e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

makeCollectionsTest()