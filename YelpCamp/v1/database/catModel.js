// catModel.js file
const connection = require('./index');
const catSchema = require('./catSchema');

var Cat = connection.model("Cat",catSchema);

module.exports = Cat;
