const express = require("express");
const compression = require("compression");

const app = express();

// apply compression
app.use(compression());
const val = "Hello World!".repeat(10000);
app.get("/", (req, res) => {
  res.send(val);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
