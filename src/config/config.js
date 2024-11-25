const mongoose = require("mongoose")
const connectDb =()=>{


try{
   mongoose.connect("mongodb+srv://samuelowase02:1SqaqhhRwu6fLUpW@cluster0.c7ltd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   console.log("connected")
  }
  catch(err){
   console.log(err)

  }
}

module.exports = connectDb;
