// Import express
const express = require("express");

// Create an app instance
const app = express();

// Define a port
const PORT = 3000;

// Basic route
app.get("/", (req, res) => {
  res.send("Vayra backend running successfully 🚀");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Vayra backend running on port ${PORT}`);
});
