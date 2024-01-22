import { Router } from "express";
const routerBirds = Router();

// middleware that is specific to this router
routerBirds.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page rsoute
routerBirds.get("/", (req, res) => {
  res.send("Birds home page");
});
// define the about route
routerBirds.get("/about", (req, res) => {
  res.send("About birds");
});

export default routerBirds;
