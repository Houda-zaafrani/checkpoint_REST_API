//import librery express
const express = require("express")

//instance app of express
const app = express();

//activate request body
app.use(express.json());

//import mongoose
const mongoose = require("mongoose");

//import librery dotenv
const dotenv = require('dotenv')

//activer dotenv
dotenv.config();

//import of PORT of file .env
const port = process.env.PORT || 8081

//connection to database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("data base connected"))
.catch((err) => {
  //display  error if dabase not connected
    if (err) throw err
}) 
//test de connection validée
// app.get("/", (req,res)=>{
//   res.send("<h1>hello</h1>")
// })

//import of file personRouter
app.use("/api",require("./routes/usserRoutes") )

//server will listen to port 5000
app.listen(port, () =>
  console.log("server connected successfult au port : ", port)
);
