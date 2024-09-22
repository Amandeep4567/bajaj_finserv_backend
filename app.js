// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const bfhlRoutes = require("./routes/bfhlRoutes");

// dotenv.config();
// const app = express();

// app.use(cors());
// app.use(bodyParser.json({ limit: "50mb" })); // Handles large JSON payloads

// // Routes
// app.use("/bfhl", bfhlRoutes);

// module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const bfhlRoutes = require("./routes/bfhlRoutes");

dotenv.config();
const app = express();

const corsOptions = {
  origin: "https://bajaj-challenge-frontend-psi.vercel.app",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/bfhl", bfhlRoutes);

module.exports = app;
