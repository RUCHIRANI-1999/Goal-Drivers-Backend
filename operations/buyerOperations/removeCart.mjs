import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "DELETE FROM cart WHERE cart_id = "+req.params.cart_id
            connection.query(sql, function (err, result, fields) {
                if (err)
                    res.send(err)
                else{
                    res.send("success")
                }
            });
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}