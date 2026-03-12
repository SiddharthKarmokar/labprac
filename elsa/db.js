import { MongoClient } from "mongodb";
import mysql from "mysql2";
// import MongoClient from "mongodb";

const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0";

export const conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rainbow9823",
    database: "mydb2"
});

const client = await new MongoClient(uri);
client.connect();
const db = client.db("mydb2");
export const users = db.collection("users");



