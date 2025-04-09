import express from "express";
import dbConnection from "./common/db-connection";

const mysql = require("mysql2");
const app = express();

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});

dbConnection
  .initialize()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err: any) => {
    console.log(err);
  });
