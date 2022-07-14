import express from "express";
// import MongoClient from "mongodb";
import cors from "cors";

// var url = "mongodb://localhost:27017/mydb";

// MongoClient.MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };

//   dbo.collection("customers").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

const app = express();

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);

app.get("/", (request, response) => {
  response.json({ name: "fuck" });
});

app.post("/user", (request, response) => {
  const { user } = req.body;
  console.log(response);
  console.log(request);
  res.send({
    user: user + "fuck",
  });
});

// app.get("/help", (request, response) => {
//   response.json("help page");
// });

app.listen(4000, () => {
  console.log("server 4000 starting");
});
