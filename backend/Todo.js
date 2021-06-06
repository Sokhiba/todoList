const mongoose = require("mongoose");

const Todo = mongoose.Schema({
   text:{
       type:String
   },
   name: {
       type: String
   } ,
   surname:{
       type: String
   } 
})

module.exports = mongoose.model("Todo", Todo);