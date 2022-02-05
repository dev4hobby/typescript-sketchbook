import "../env"
import { MongoClient } from "mongodb";
export const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
export const connect = (uri: string = mongoUri, options: any = mongoOptions) => 
  MongoClient.connect(uri, options)
