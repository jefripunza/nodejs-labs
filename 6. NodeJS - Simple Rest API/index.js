require("dotenv").config();

// Web Server
const express = require("express");
const app = express();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server listen at ${port}`);
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// connection database
require("./db");

// import routers
app.use(require("./routers/authRouter"));
