// find.js file
const catModel = require('./catModel');

// 查询条件，对象格式，键值对，下面为查询 name 为 lisi 的记录
catModel.find().then(cat => {
    console.log(cat);
})
