import { connect } from "../mongodb/connect"
import { ObjectID } from "mongodb"

const findOneTest = async() => {
  let connection, cursor
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    const personsCollection = db.collection('persons')
    cursor = personsCollection.find({})
    const foundPersons = await cursor.toArray()

    const _id = foundPersons[0]._id
    const result = await personsCollection.findOne({_id: new ObjectID(_id)})
    console.log(result)
  } catch (e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

findOneTest()