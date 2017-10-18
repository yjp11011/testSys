require('babel-polyfill');
let express=require('express');
let routers=express.Router();
let Obj=require('../model/Obj');
let questionBankDB=require('../db/questionBankDB');
routers.get('/findAll',function(req,resp){
    questionBankDB.findAll().then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
routers.post('/findByAll',function(req,resp){
    let obj=new Obj();
    Object.assign(obj,req.body);
    console.log(req.body);
    questionBankDB.findByAll(obj).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
routers.post('/save',function(req,resp){
    let obj=new Obj();
    Object.assign(obj,req.body);
    questionBankDB.save(obj).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
routers.post('/batchDelete',function(req,resp){
    var ids=req.body;
    console.log(ids);
    questionBankDB.batchDelete(ids).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
routers.get('/findById',function(req,resp){
    var id=req.query.id;
    console.log(id);
    questionBankDB.findById(id).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
routers.get('/query',function(req,resp){
    var keys=req.query.keys;
    console.log(keys);
    questionBankDB.query(keys).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
routers.post('/update',function(req,resp){
    let obj=new Obj();
    Object.assign(obj,req.body);
    console.log(req.body);
    questionBankDB.update(obj).then(function(results){
        resp.send(results);
    }).catch(function(err){
        resp.send('出错了',err);
    })
});
module.exports=routers;