import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        connection.query("SELECT * FROM product WHERE seller_id="+req.params.seller_id+" AND type = 'selling'", function (err, result, fields) {
            if (err) res.send(err);
            else{
                res.send(result)
            }
          });   
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}