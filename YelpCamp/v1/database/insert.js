// insert.js file
let mongoose = require('mongoose');
let connection = require('./index');
const catModel = require('./catModel');
const catSchema = require('./catSchema');

var newCat= new catModel({
    name:"snow white",
    age:5,
    temperament:"fish"
})

newCat.save().then((cat) => {
    console.log(cat);
});
