var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
var campgrounds = [
  {name:"Salmon Creek",image:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"},
  {name:"sajdbja",image:"https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq"},
  {name:"kdna Creek",image:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"},
  {name:"kdna Creek",image:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"},
  {name:"kdna Creek",image:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"},
  {name:"kdna Creek",image:"https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg"}
]

app.get("/",function(req,res){
  res.render("landing");
});

app.get("/campgrounds",function(req,res){
  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
   //get data from form
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = {name:name,image:image};
   campgrounds.push(newCampground);
   //redirect to the campgrounds
   res.redirect("/campgrounds");

});

app.get("/campgrounds/new",function(req,res){
   res.render("new");
});

app.listen(3000,function(){
    console.log("sever at 3000...");
})