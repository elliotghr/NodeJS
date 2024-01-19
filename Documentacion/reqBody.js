import express, { json, urlencoded } from "express";

var app = express();

app.use(json()); // for parsing application/json
app.use(urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/profile", function (req, res, next) {
  console.log(req.body);
  console.log(req.body.saludo);
  console.log(req.baseUrl); // /greet
  res.json(req.body);
});

app.listen(3000);
