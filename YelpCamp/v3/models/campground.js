// campground.js file
var mongoose = require("mongoose");
var connection = require("../connection");
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   author :{
      id:{
         type : mongoose.Schema.Types.ObjectId,
         ref:"User"
      },
      username : String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

var Campground = connection.model("Campground",campgroundSchema);
 
module.exports = Campground;
