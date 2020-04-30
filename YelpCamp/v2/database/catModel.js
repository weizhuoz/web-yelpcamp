// catModel.js file
const connection = require('./connection');
const catSchema = require('./catSchema');

var Cat = connection.model("Cat",catSchema);

module.exports = Cat;
