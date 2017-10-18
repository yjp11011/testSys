require('babel-polyfill');
let userDB=require('./userDB');
let questionBankDB=require('./questionBankDB');
let User=require('../model/User');
let Obj=require('../model/Obj');
let user=new User(1,'养老天使','1234');
// let obj={
//     type:null
// }
// let ww=new Obj();
// Object.assign(ww,obj);

// userDB.save(user).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// let str='养老天使';
// userDB.findByUser2(str).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// console.log(ww.difficulty)
// questionBankDB.findByAll(ww).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// questionBankDB.batchDelete([16]).then(function(results){
//     console.log(results);
// }).catch(function(err){
//     console.log('出错了',err);
// });
// let obj=new Obj(14,'单选题','WebUI','WebUI','难','123','123',4,'1','2');

questionBankDB.query(keys).then(function(results){
    console.log(results);
}).catch(function(err){
    console.log('出错了',err);
});