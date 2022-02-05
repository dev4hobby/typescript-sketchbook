import { connect } from "../mongodb/connect";

const connectTest = async () => {
  let connection
  try {
    connection = await connect()
    console.log(`connection OK >> `, connection)
  } catch(e) {
    console.error(e)
  } finally {
    connection.close()
  }
}

connectTest()