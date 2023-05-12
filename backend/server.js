require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const noteRoutes = require("./routes/note-routes")
const connectDB = require("./config/db")
const port = 3001
const app = express()
const cors = require('cors');


connectDB()

app.use(express.json())
app.use(cors());
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

app.use(noteRoutes)

app.use((err,req,res,next)=>{
    if(res.statusCode == 200) res.status(500)
console.log(err)
res.status(500).json({"msg":err.messge})
})
    