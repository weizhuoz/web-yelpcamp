var mongoose = require("mongoose");
var connection = require("../connection");
var passportLocalMonggose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMonggose);

var User = connection.model("User", UserSchema);
module.exports = User;