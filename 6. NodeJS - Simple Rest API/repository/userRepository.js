const { ObjectID } = require("bson");
const { MongoClient } = require("mongodb");

const database = "labs";
const collection = "users";

// Read
exports.isUserRegistered = async (phone) => {
  const monggodb = new MongoClient(process.env.MONGODB);
  try {
    await monggodb.connect();
    //
    const coll = monggodb.db(database).collection(collection);
    const result = await coll
      .find({
        phone,
      })
      .toArray();
    return result.length > 0;
  } finally {
    // Ensures that the monggodb will close when you finish/error
    await monggodb.close();
  }
};

// Create
exports.insertNewUser = async (data) => {
  const monggodb = new MongoClient(process.env.MONGODB);
  try {
    await monggodb.connect();
    //
    const coll = monggodb.db(database).collection(collection);
    return await coll.insertOne(data);
  } finally {
    // Ensures that the monggodb will close when you finish/error
    await monggodb.close();
  }
};

// ----------------------------------------------------------------

// Read
exports.isLogin = async (phone, password) => {
  const monggodb = new MongoClient(process.env.MONGODB);
  try {
    await monggodb.connect();
    //
    const coll = monggodb.db(database).collection(collection);
    const result = await coll
      .find({
        phone,
        password,
      })
      .toArray();
    return result.length > 0;
  } finally {
    // Ensures that the monggodb will close when you finish/error
    await monggodb.close();
  }
};

// Update
exports.updateUserById = async (_id, new_update) => {
  const monggodb = new MongoClient(process.env.MONGODB);
  try {
    await monggodb.connect();
    //
    const coll = monggodb.db(database).collection(collection);
    return await coll.updateOne(
      {
        _id: ObjectID(_id),
      },
      {
        $set: {
          ...new_update,
        },
      }
    );
  } finally {
    // Ensures that the monggodb will close when you finish/error
    await monggodb.close();
  }
};

// Delete
exports.deleteUserById = async (_id) => {
  const monggodb = new MongoClient(process.env.MONGODB);
  try {
    await monggodb.connect();
    //
    const coll = monggodb.db(database).collection(collection);
    return await coll.deleteOne({
      _id: ObjectID(_id),
    });
  } finally {
    // Ensures that the monggodb will close when you finish/error
    await monggodb.close();
  }
};
