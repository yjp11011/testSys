let pool=require('./pool');
module.exports={
    findByDrct(drection){
        let sql="select * from knowledge";
        return pool.execute(sql);
    }
}