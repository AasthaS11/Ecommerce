const express = require("express");
import { connectDB } from "./dal/db";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, async () => {
  console.log(`Server is connect to ${process.env.PORT}`);
  await connectDB();
});