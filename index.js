const http = require("http");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const userRoutes = require("./route/userRoute.js");
const chatRoute = require("./route/chatRoute.js");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors({ origin: 'https://my-ways-frontend.vercel.app' }));
dotenv.config();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://my-ways-frontend.vercel.app",
    methods: ["GET", "POST"],
  },
});

// Socket.io
io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("message", message);
  });
});

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

app.get("/", (req, res) => {
  res.send("API working");
});

app.use("/api/auth", userRoutes);
app.use("/api/message", chatRoute);

server.listen(8080, () => console.log(`Server Started at PORT:8080`));
