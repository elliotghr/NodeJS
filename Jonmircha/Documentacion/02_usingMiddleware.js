// Application-level middleware
import express from "express";

const app = express();
const port = 3000;

app.get(
  "/user/:id",
  (req, res, next) => {
    // if the user ID is 0, skip to the next route
    if (req.params.id === "0") next("route");
    // otherwise pass the control to the next middleware function in this stack
    else next();
  },
  (req, res, next) => {
    // send a regular response
    res.send("regular");
  }
);

// handler for the /user/:id path, which sends a special response
app.get("/user/:id", (req, res, next) => {
  res.send("special");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});