import express from "express";
import bodyParser from "body-parser";

import defaultRoutes from "./routes/default.route";

const app = express();

app.use(bodyParser.json());

app.use("/default", defaultRoutes);

app.listen(process.env.PORT, () => {
  console.log("The application is listening on port 3000");
});
