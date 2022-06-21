import express, { Request, Response } from "express";
import morgan from "morgan";

const port = process.env.PORT || 5000;

const app = express();

// Middlewares
app.use(morgan("dev"));

// run server
app.listen(port, () => {
  console.log(`Server listen at ${port}`);
});

// import all routers
app.use(require("../routers/ViewRouter").default);
