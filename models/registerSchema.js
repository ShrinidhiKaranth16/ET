var mongoose = require("mongoose");

//Doctor Schema
var registerSchema = new mongoose.Schema({
	name:String,
    DOB:String,
    gender:String,
    accountNumber:String,
    contactNumber:Number,
    address:String,
    state:String,
    pin:Number,
    IFSC_Code:String,
    workStatus:String,
    salary:String,
    Email:String,
    occupation:String,
    institutionName:String
});

module.exports = mongoose.model("register",registerSchema);