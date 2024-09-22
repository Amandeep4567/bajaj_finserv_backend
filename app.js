const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const bfhlRoutes = require("./routes/bfhlRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // Handles large JSON payloads

// Routes
app.use("/bfhl", bfhlRoutes);

module.exports = app;
