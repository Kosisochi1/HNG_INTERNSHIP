const express = require("express");
require("dotenv").config();

const port = process.env.PORT;

const app = express();

const basic = {
  email: "ezeoyiri92@gmail.com",
  current_datetime: `${new Date().toISOString()}`,
  github_url: "<https://github.com/yourusername/your-repo>",
};

app.get("/", (req, res) => {
  return res.status(200).json({
    massage: "Basic Info",
    data: basic,
  });
});

app.listen(port, () => {
  console.log("Server Sterted");
});
