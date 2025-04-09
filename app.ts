import express from "express";
import dbConnection from "./common/db-connection";
import vehiclesRouter from "./routing/vehicles-routing";
import authRouter from "./routing/auth-routing";

const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use("/vehicles", vehiclesRouter);
app.use("/auth", authRouter);

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
