import express from "express";
import dbConnection from "./common/db-connection";
import cors from "cors";
import path from "path";
import vehiclesRouter from "./routing/vehicles-routing";
import authRouter from "./routing/auth-routing";
import fileUploadRouter from "./common/file-upload";
import vehicleImagesRouter from "./routing/vehicle-images-routing";
import additionalRouter from "./routing/additionals-routing";
import equipmentRouter from "./routing/equipment-routing";

const mysql = require("mysql2");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("/vehicles", vehiclesRouter);
app.use("/auth", authRouter);
app.use("/vehicles", vehicleImagesRouter);
app.use("/additionals", additionalRouter);
app.use("/equipment", equipmentRouter);
app.use(fileUploadRouter);

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
