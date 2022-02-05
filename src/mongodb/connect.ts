import { MongoClient } from "mongodb";
export const mongoUri = "mongodb+srv://ts-sketch:IYaRwnWNwtU3pihC@cluster0.xclq8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}
export const connect = (uri: string = mongoUri, options: any = mongoOptions) => 
  MongoClient.connect(uri, options)
