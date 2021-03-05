import bodyParser from "body-parser";
import express from "express";

import defaultRoutes from "./routes/default.route";

const app = express();

app.use(bodyParser.json());

app.use("/default", defaultRoutes);

app.listen(3000, () => {
  console.log("The application is listening on port 3000");
});
