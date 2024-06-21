import {connection_function} from '../../service/connection.mjs'
import {sendMails} from '../send_mails/send_mails.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "SELECT * FROM delivery WHERE delivery_id = "+req.params.delivery_id
        connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        else{
            res.send(result)
        }
        });
    }
    catch{
    console.log("catch")
    res.send("internal sql error")
    return
}
}