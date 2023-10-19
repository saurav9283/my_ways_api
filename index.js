const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("../backend/route/userRoute.js")

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("API working");
});
app.use("/api/auth" , userRoutes)

mongoose.connect(process.env.MONGO,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connected Sucessfull");
}).catch((error)=>{
    console.log(error.message);
});

app.listen(process.env.PORT , ()=>{
    console.log(`Server started on port ${process.env.PORT}`);
});
