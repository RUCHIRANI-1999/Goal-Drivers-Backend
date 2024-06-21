import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM product WHERE product_id= "+req.params.product_id, function (err, result, fields) {
            if (err) res.send(err);
            else{
                if(result[0].type!=='selling' || result[0].amount===0){
                    res.send("Low Amount Or Not A Bid Product")
                }
                else{
                    //do the payment
                    let amount = result[0].amount-1
                    var sql = "UPDATE product " + "SET amount = "+amount+" WHERE product_id = "+req.params.product_id
                    connection.query(sql, function (err, result2, fields) {
                    if (err) res.send(err);
                    else{
                        var sql = "INSERT INTO sale (product_id, buyer_id , amount , price,name ) " + "VALUES ("+product_id+","+buyer_id+" , 1 , "+result[0].price+" , '"+result[0].name+"')"
                        connection.query(sql, function (err, result2, fields) {
                            if (err) res.send(err);
                            else{
                                res.send("success")
                            }
                        })
                        
                    }
    })
                }
            }
          });   
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}