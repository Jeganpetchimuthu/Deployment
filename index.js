const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const dbUrl = "mongodb://0.0.0.0:27017";

mongoose.connect(dbUrl, { useNewUrlParser: true });

const con = mongoose.connection;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

try {
  con.on("open", () => {
    console.log("mongoDB connected!!!");
  });
} catch (error) {
  console.log("Error: " + error);
}

const port = 4000;

const studentRouter = require("./routes/student");

app.use("/students", studentRouter);

app.get("/", (req, res) => {
  res.send("welcome!!!!");
});
app.get("/read", (req, res) => {
  res.send("Hello all welcome!!!!");
});

app.listen(port, () => {
  console.log("This Node application is running on port " + port);
});
