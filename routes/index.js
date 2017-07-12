var express = require('express');
var router = express.Router();
var session = require('express-session');
var User = require("../model/user");
var responseData={code:'',message:''};//初始值
function isLoginIn(req){
    if(req.session.user_data){
        return true;
    }else{
        return false;
    }
}
/* GET home page. */
router
    .get('/', function(req, res, next) {
           res.render('index', { title: 'Express' });
    })
    .get("/login",function(req,res,next){
         res.render('login');
    })
   .get("/home",function(req,res,next){
        if(isLoginIn(req)){
            res.render('home',{username:req.session.user_data.username});
        }else{
           res.redirect("/login")
        }

    })
   .post("/doLogin",function(req,res,next){
      var username = req.body.username;
      var password = req.body.password;
      var user_data = {username:username,password:password}
      if(username == ''|| password == ''){
        responseData.code = 0;
        responseData.message = '用户名或密码不能为空';
        res.json(responseData);
        return;
      };
      User.findOne(user_data).then(function(userinfo){
        if(!userinfo){
          responseData.code = -1;
          responseData.message = '用户名或密码错误';
          res.json(responseData);
          return;
        }else{
            req.session.user_data = user_data;
            console.log(req.sessionID)
            responseData.code = 1;
            responseData.message ='登陆成功';
            res.json(responseData);
            return;
        }

      })
   })
module.exports = router;
