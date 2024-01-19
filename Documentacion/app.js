import express from "express";
import router from "./router.js"

const app = express();
const port = 3000;

app.use("/router", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
