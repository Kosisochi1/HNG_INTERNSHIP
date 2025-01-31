const express = require("express");
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT;

const app = express();

const basic = {
  email: process.env.EMAIL,
  current_datetime: `${new Date().toISOString()}`,
  github_url: process.env.GITHUBREPO,
};
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ massage: "Basic Information" });
});

app.get("/basic_info", (req, res) => {
  return res.status(200).json({
    // massage: "Basic Info",
    basic,
  });
});

app.get("*", (req, res) => {
  return res.status(400).json({ massage: "Bad Request" });
});

app.listen(port, () => {
  console.log("Server Sterted");
});
