import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0";
const client = new MongoClient(url);

await client.connect();
const db = client.db("mydb1");

// const result = await db.collection("users").insertOne({
//     name: "Rehant",
//     age: 21
// });

// console.log("Document inserted: ", result.insertedId);

const users = db.collection("users");

// const query = {name: {$regex:/^R/i}};

const cursor = await users.find({});
console.log(await cursor.toArray());

// const res = await users.deleteMany(query);
// console.log(res);

await client.close();