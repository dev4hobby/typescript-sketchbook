import { connect } from "../mongodb/connect"

const makedbTest = async () => {
  let connection
  try {
    connection = await connect()
    const db = await connection.db('new-test')
    console.log('db', db)
  } catch(e) {
    console.log(e)
  } finally {
    connection.close()
  }
}

makedbTest()