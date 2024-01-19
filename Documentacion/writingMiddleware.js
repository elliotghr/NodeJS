import express from "express";
import cookieParser from "cookie-parser";

const app = express();

// first middleware
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};

// second middleware
const requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
};

app.use(myLogger);
app.use(requestTime);

app.get("/", (req, res) => {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;
  res.send(responseText);
});

app.listen(3000);
