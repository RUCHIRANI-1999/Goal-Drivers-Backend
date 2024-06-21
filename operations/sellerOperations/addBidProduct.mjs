import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    function format (date) {  
        if (!(date instanceof Date)){
          throw new Error('Invalid "date" argument. You must pass a date instance')
        }
        var today = new Date();
        var time = today.getHours()+req.body.duration + ":" + today.getMinutes() + ":" + today.getSeconds();
        return `${time}`
      }

    try{
        var sql = "INSERT INTO product (admin_status , type,name,discription ,seller_id , amount , price) " + "VALUES ('pending','bid','"+req.body.name+"','"+req.body.description+"',"+req.body.seller_id+","+req.body.amount+","+req.body.base_price+")"
        connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        else{
            var current_time = format(new Date)
            var sql = "INSERT INTO bid_product (prodcut_id , status, base_price ,end_time) " + "VALUES ("+result.insertId+",'ongoing',"+req.body.base_price+",'"+current_time+"')"
            connection.query(sql, function (err, result2, fields) {
                if (err) res.send(err);
                else{
                    res.send("success")
                }
            });
        }
        });    
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}