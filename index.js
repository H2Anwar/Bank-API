const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();

//Import Routes
const authRoute = require("./routes/auth");

//Connect to Database
require("./connectdb");

//Middlewares
app.use(cors());
app.use(express.json());
app.use("/user", authRoute);

app.listen(8000, () => console.log("Server up and running"));
