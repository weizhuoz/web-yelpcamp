// catSchema.js file
const mongoose = require('mongoose');

var catSchema = new mongoose.Schema({
    name:String,
    age:Number,
    temperament:String
});

module.exports = catSchema;
