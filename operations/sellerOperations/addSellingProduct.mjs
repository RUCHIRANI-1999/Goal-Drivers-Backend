import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "INSERT INTO product (admin_status , type,name, discription ,seller_id , amount , price) " + "VALUES ('pending','selling','"+req.body.name+"','"+req.body.description+"',"+req.body.seller_id+","+req.body.amount+","+req.body.price+")"
        connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        var sql = "INSERT INTO rating (product_id , rating,amount) " + "VALUES ("+result.insertId+" , 0 , 0)"
        connection.query(sql, function (err, result2, fields) {
        if (err) res.send(err);
        else{
            res.send("success")
        }
        });
        });
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}