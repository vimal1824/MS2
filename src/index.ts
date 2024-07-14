import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("MS2");
});

app.get("/ms2", (req, res) => {
  res.send("<h1>MS2</h1>");
});

app.listen(8081, () => {
  console.log("Server is running on port ", port);
});
