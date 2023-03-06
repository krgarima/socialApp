const express = require("express");
const format = require("date-format");

const app = express();
const PORT = 4000 || process.env.PORT;

const currentDateTime = format.asString("dd-MM-yy - hh:mm:ss", new Date());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello Gary</h1>");
});

app.get("/api/v1/instagram", (req, res) => {
  const instaSocial = {
    username: "garryInsta",
    followers: 12,
    following: 14,
    date: currentDateTime,
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
  const instaSocial = {
    username: "garryFacebook",
    followers: 43,
    following: 44,
    date: currentDateTime,
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
  const instaSocial = {
    username: "garryLinkedIn",
    followers: 82,
    following: 86,
    date: currentDateTime,
  };
  res.status(200).json(instaSocial);
});

app.get("/api/v1/:token", (req, res) => {
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
});
