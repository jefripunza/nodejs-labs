const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// running server
app.listen(port, () => {
  console.log("Server listen at " + port);
});

// Client mulai request

// // Global Middleware
// app.use(require("./middleware"));

app.get("/", (req, res) => {
  return res.send("Hallo IST");
});

// // Specific Middleware
// app.use(require("./middleware"));

// Specific Middleware
app.get("/kantor", require("./didalam_kota"), (req, res) => {
  return res.send("Hallo IST");
});

app.get("/healing", require("./diluar_kota"), (req, res) => {
  return res.send("Hallo IST");
});
