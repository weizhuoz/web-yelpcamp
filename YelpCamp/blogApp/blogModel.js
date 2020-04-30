// blogModel.js file
const connection = require('./connection');
const blogSchema = require('./blogSchema');

var Blog = connection.model("Blog",blogSchema);

module.exports = Blog;