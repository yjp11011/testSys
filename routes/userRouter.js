require('babel-polyfill');
let express=require('express');
let routers=express.Router();
let User=require('../model/User');
let userDB=require('../db/userDB');
routers.get('/findByUser',function(req,resp){
    var user=req.query.user;
    console.log(user);
    userDB.findByUser(user).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send(err);
    });
});
routers.post('/save',function(req,resp){
    let user=new User();
    Object.assign(user,req.body);
    userDB.save(user).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send(err);
    });
});
module.exports=routers;