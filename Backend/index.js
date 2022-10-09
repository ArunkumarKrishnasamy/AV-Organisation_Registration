const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const PORT = process.env.PORT || 3001;

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const URL = "mongodb://localhost:27017";

app.post("/organisation", async (req, res) => {
  try {
    // open the connection
    let connection = await mongoClient.connect(URL);
    // connect with db
    let db = connection.db("registration");
    // select the collections
    await db.collection("organisation").insertOne(req.body);
    await connection.close();
    res.json({ message: "Organisation added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong",
    });
  }
});
app.get("/organisation", async (req, res) => {
  try {
    let connection = await mongoClient.connect(URL);
    let db = connection.db("registration");
    let users = await db.collection("organisation").find().toArray();
    await connection.close();
    res.json(users);
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log("Web Server Started Now");
});
