const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("../backend/route/userRoute.js");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  };

  connect();
app.get('/', (req, res) => {
    res.send("API working");
});
app.use("/api/auth", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});
