require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// const PORT = process.env.PORT || 3000
const app = express()

app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(express.static('uploads'))
app.use("",require('./routes/route'))

mongoose.connect(process.env.DB_URI, { useNewUrlParser:true})

const db = mongoose.connection
db.on('error',(error) => console.log(error))
db.once("open", ()=>console.log("connected to database"))


//app.listen(PORT,()=>{
   // console.log(`Server started at http://localhost:${PORT}`) //for the checking Port
//})