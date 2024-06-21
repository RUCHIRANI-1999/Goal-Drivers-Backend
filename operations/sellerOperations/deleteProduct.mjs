import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "DELETE FROM product WHERE prodcut_id = "+req.params.prodcut_id
            connection.query(sql, function (err, result, fields) {
                if (err)
                    res.send(err)
                else{
                    var sql = "DELETE FROM bid_product WHERE prodcut_id = "+req.params.prodcut_id
            connection.query(sql, function (err, result2, fields) {
                if (err)
                    res.send(err)
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