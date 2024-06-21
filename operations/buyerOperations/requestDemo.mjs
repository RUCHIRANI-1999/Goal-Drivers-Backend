import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "INSERT INTO request_demo (buyer_id ,full_name , contact , email , request) " + "VALUES ("+req.body.buyer_id+",'"+req.body.fullName+"','"+req.body.contact+"','"+req.body.email+"','"+req.body.request+"')"
        connection.query(sql,async function (err, result, fields) {
        if (err) res.send(err);
        else{
            let subject = "You have a DEMO Request"
            let mail_body = 'Your reuest id is : '+result.insertId
            let email = "Karunarathnarmcc.20@uom.lk"
            await sendMail_noAttach(email ,subject , mail_body)
            res.send("success")
        }
        });
    }
    catch{
    console.log("catch")
    res.send("internal sql error")
    return
}
}