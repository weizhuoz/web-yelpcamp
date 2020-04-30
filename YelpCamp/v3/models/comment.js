var mongoose = require("mongoose");
var connection = require("../connection");
var commentSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});

var Comment = connection.model("Comment", commentSchema);
 
module.exports = Comment;