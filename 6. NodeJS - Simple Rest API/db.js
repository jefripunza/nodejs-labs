const { MongoClient } = require("mongodb");

const db = new MongoClient(process.env.MONGODB);

// test connection
db.connect((error, client) => {
  if (error) {
    console.log({ error });
    throw new Error("Error connection to MongoDB!");
  }
  console.log("MongoDB Connected!");
  client.close();
});
