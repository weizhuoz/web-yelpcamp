var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
let connection = require('./database/connection');


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

var campgroundsSchema = new mongoose.Schema({
  name:String,
  image:String,
  description:String
});

var Campgrounds = connection.model("Campground",campgroundsSchema);


app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  Campgrounds.find({},function(err,allCampgrounds){
    if(err){
      console.log(err);
    }
    else{
      res.render("index",{campgrounds: allCampgrounds});
    }
  });
  // res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
   //get data from form
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name:name,image:image,description: desc};
   Campgrounds.create(
    newCampground,function(err,campground){
      if(err){
        console.log(err);
      }
      else{
        res.redirect("/campgrounds");
      }
    }
  );
});

app.get("/campgrounds/new",function(req,res){
   res.render("new");
});

app.get("/campgrounds/:id",function(req,res){
  Campgrounds.findById(req.params.id, function(err,foundCampground){
     if(err){
        console.log(err);
     }else{
        // res.render("show");
        res.render("show",{campground:foundCampground});
     }
  });
});

app.listen(3000,function(){
    console.log("sever at 3000...");
})