// insert.js file
let mongoose = require('mongoose');
let connection = require('./connection');
const catModel = require('./catModel');
const catSchema = require('./catSchema');

var newCat= new catModel({
    name:"miaomiao",
    age:5,
    temperament:"fish and water"
})

newCat.save().then((cat) => {
    console.log(cat);
});
