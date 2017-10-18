let pool=require('./pool');
module.exports={
    findAll(){
        let sql="select * from questionBank";
        return pool.execute(sql);
    },
    findByAll(obj){
        let sql="select * from questionBank where type in('"
         +obj.type+"') and difficulty in('"
        +obj.difficulty+"') and knowledge in('"
        +obj.knowledge+"') and direction in('"
        +obj.direction+"')";
        return pool.execute(sql);
    },
    findById(id){
        let sql="select * from questionBank where id="+id;
        return pool.execute(sql);
    },
    save(obj){
        let sql="insert into questionBank values(null,'"
        +obj.type+"','"
        +obj.direction+"','"
        +obj.knowledge+"','"
        +obj.difficulty+"','"
        +obj.question+"','"
        +obj.answer+"',"
        +obj.grade+",'"
        +obj.A+"','"
        +obj.B+"','"
        +obj.C+"','"
        +obj.D+"','"
        +obj.E+"','"
        +obj.F+"')";
        return pool.execute(sql);
    },
    batchDelete(ids){
        let sql="delete from questionBank where id in("+ids.join()+")";
        return pool.execute(sql);
    },
    update(obj){
        let sql="update questionBank set type= '"
        +obj.type+"',direction='"
        +obj.direction+"',knowledge='"
        +obj.knowledge+"',difficulty='"
        +obj.difficulty+"',question='"
        +obj.question+"',answer='"
        +obj.answer+"',grade="
        +obj.grade+",A='"
        +obj.A+"',B='"
        +obj.B+"',C='"
        +obj.C+"',D='"
        +obj.D+"',E='"
        +obj.E+"',F='"
        +obj.F+"' where id="+obj.id;
        return pool.execute(sql);
    },
    query(keys){
        let sql='select * from questionBank where type like "%'
        +keys+'%" or direction like "%'
        +keys+'%" or knowledge like "%'
        +keys+'%" or difficulty like "%'
        +keys+'%" or question like "%'
        +keys+'%" or answer like "%'
        +keys+'%" or A like "%'
        +keys+'%" or B like "%'
        +keys+'%" or C like "%'
        +keys+'%" or D like "%'
        +keys+'%" or E like "%'
        +keys+'%" or F like "%'
        +keys+'%" or A like "%'
        +keys+'%" or grade like "%'
        +keys+'%"';
        return pool.execute(sql);
    }
}
