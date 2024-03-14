import { MongoClient } from "mongodb";

async function connect() {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017");
    const db = client.db("Node-RestAPI");
    console.log("Database in connected");
    return db;
  } catch (error) {
    console.log(error);
  }
}

export default connect;
