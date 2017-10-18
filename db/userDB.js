let pool=require('./pool');
module.exports={
    findByUser(user){
        let sql="select * from user where user = '"+user+"'";
        return pool.execute(sql);
    },
    save(user){
        let sql="insert into user values(null,'"
        +user.user+"','"
        +user.password+"')";
        return pool.execute(sql);
    },
    findByUser2(user){
        let sql="select * from user where user = "+user;
        return pool.execute(sql);
    },
}