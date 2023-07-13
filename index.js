import express from "express";
import solutions from "./questions/index.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   const { solution1, solution2, solution3, solution4 } = solutions
  solution1();
  solution2();
  solution3();
  solution4();
  res.send("Check the logs");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});