import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res , status){
    const connection = connection_function()
    try{
        var sql = "UPDATE product " + "SET admin_status = '"+status+"' WHERE product_id = "+req.params.product_id
        connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        else{
            res.send("success")
        }
    })
        
    }
    catch{
    console.log("catch")
    res.send("not valid")
    return
}
}