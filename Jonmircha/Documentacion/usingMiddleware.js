import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  }
);

app.get("/user/:id", (req, res, next) => {
  res.send("USER");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
