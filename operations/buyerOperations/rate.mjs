import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT rating, amount FROM rating WHERE product_id = "+req.params.product_id, function (err, result, fields) {
            if (err) res.send(err);
            console.log("result",result)
            console.log(result[0].rating)
            const rate =  result[0].rating
            const rate_amount = result[0].amount
            let new_rate_amount = rate_amount+1
            const new_rate =((rate * rate_amount) + parseInt( req.params.rate)) /(new_rate_amount)
            console.log(new_rate)
            console.log(new_rate_amount)
            var sql = "UPDATE rating "+"SET rating = "+new_rate+",amount = "+new_rate_amount+" WHERE product_id = "+req.params.product_id
            connection.query(sql, function (err, result2, fields) {
            if (err) res.send(err);
            console.log(result2)
            res.send("success")
        });  
          });
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}