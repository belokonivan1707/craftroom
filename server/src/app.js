// https://medium.com/@libelluloid/react-authentication-how-to-store-jwt-in-a-cookie-be604bec0180

// server.js
const express = require("express");
const jwt = require("express-jwt");
const jsonwebtoken = require("jsonwebtoken");
const cors = require("cors");
const app = express();
app.use(cors());
const jwtSecret = "secret123";
app.get("/jwt", (req, res) => {
  res.json({
    token: jsonwebtoken.sign({ user: "johndoe" }, jwtSecret),
  });
});
app.use(jwt({ secret: jwtSecret, algorithms: ["HS256"] }));
const foods = [
  { id: 1, description: "burritos" },
  { id: 2, description: "quesadillas" },
  { id: 3, description: "churos" },
];
app.get("/foods", (req, res) => {
  res.json(foods);
});
app.listen(3001);
console.log("App running on localhost:3001");

// import express from "express";
// // import MongoClient from "mongodb";
// import cors from "cors";

// // var url = "mongodb://localhost:27017/mydb";

// // MongoClient.MongoClient.connect(url, function (err, db) {
// //   if (err) throw err;
// //   var dbo = db.db("mydb");
// //   var myobj = { name: "Company Inc", address: "Highway 37" };

// //   dbo.collection("customers").insertOne(myobj, function (err, res) {
// //     if (err) throw err;
// //     console.log("1 document inserted");
// //     db.close();
// //   });
// // });

// const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:3001",
//   })
// );

// app.get("/", (request, response) => {
//   response.json({ name: "fuck" });
// });

// app.post("/user", (request, response) => {
//   const { user } = req.body;
//   console.log(response);
//   console.log(request);
//   res.send({
//     user: user + "fuck",
//   });
// });

// // app.get("/help", (request, response) => {
// //   response.json("help page");
// // });

// app.listen(4000, () => {
//   console.log("server 4000 starting");
// });
