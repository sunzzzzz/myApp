var mongoose = require('mongoose');
var DB_CONN_URL = 'mongodb://localhost:27017/test';

mongoose.connect(DB_CONN_URL);
var db = mongoose.connection;
db.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});

db.on("open", function () {
    console.log("数据库连接成功");
})

db.on('disconnected', function () {
    console.log('数据库连接断开');
})


module.exports = mongoose;