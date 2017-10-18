require('babel-polyfill');
let express=require('express');
let routers=express.Router();
let knowledgeDB=require('../db/knowledgeDB');
routers.get('/findByDrct',function(req,resp){
    knowledgeDB.findByDrct().then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send(err);
    });
});
module.exports=routers;