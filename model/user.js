/**
 * Created by �� on 2017/7/10.
 */
var mongoose = require("./../database/db");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    userid:String,
    username:String,
    password:String
});
var userModel = mongoose.model('user',UserSchema); //user�������ݿ���Զ���s�����ݿ���Ӧ�ô�users��
module.exports = userModel;