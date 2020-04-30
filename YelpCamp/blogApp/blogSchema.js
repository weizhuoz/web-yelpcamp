// blogSchema.js file
const mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
    title:String,
    image:String,
    body:String,
    created:{type:Date,default:Date.now}
});

module.exports = blogSchema;