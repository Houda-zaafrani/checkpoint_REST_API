//import of mongoose librery
const mongoose = require("mongoose")

//create of userSchema
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  email :{type:String, required :true}
})

//create model of userSchema with name User
const User = mongoose.model("user", userSchema)

//export model
module.exports=User