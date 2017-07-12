/**
 * Created by 圳 on 2017/7/10.
 */
var mongoose = require("./../database/db");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    userid:String,
    username:String,
    password:String
});
var userModel = mongoose.model('user',UserSchema); //user存入数据库会自动加s（数据库里应该存users表）
module.exports = userModel;