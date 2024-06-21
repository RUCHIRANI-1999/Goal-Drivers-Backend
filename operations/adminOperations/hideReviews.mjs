import {connection_function} from '../../service/connection.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "UPDATE review " + "SET status = FALSE WHERE review_id = "+req.params.review_id
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