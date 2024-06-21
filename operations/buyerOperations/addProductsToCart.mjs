import {connection_function} from '../../service/connection.mjs'

async function addToCart(product_ids , res , i , buyer_id , connection){
    console.log(i)
    if(i===product_ids.length){
        res.send("success")
        return;
    }
    else{
        var sql = "INSERT INTO cart (buyer_id , product_id) " + "VALUES ("+product_ids[i]+","+buyer_id+")"
        connection.query(sql, function (err, result, fields) {
        if (err) {res.send(err)}
        else{
            console.log(product_ids)
            addToCart(product_ids , res , i+1 , connection)
        }
        });
    }
}

export async function operation(product_id , buyer_id){
    try{
        const connection = connection_function()
        var sql = "INSERT INTO cart (buyer_id , product_id) " + "VALUES ("+buyer_id+","+product_id+")"
        connection.query(sql, function (err, result, fields) {
        if (err) {res.send(err)}
        else{
        }
        });
    }
    catch{
    console.log("catch")
    res.send("internal sql error")
    return
}
}