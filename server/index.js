const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const MONGO_URI = 'mongodb+srv://abdoamsg17:xIHLtglSdmurM78S@cluster.yruyjtf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster'
// Connect DB
mongoose
  .connect(MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server is running on port 5000"));
