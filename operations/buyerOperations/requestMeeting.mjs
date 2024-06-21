import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "INSERT INTO request_meeting (buyer_id , seller_id , seller_status ,full_name , contact , email , request) " + "VALUES ("+req.body.buyer_id+","+req.body.seller_id+",'pending','"+req.body.fullName+"','"+req.body.contact+"','"+req.body.email+"','"+req.body.request+"')"
        connection.query(sql, function (err, result, fields) {
        if (err) res.send(err);
        else{
            connection.query("SELECT email FROM user WHERE  user_id= "+req.body.seller_id, async function (err, result2, fields) {
                if (err) res.send(err);
                else{
                    console.log(result2[0])
                    if(result2.length>0){
                        let subject = "You have a meeting request"
                        let mail_body = 'Your reuest id is : '+result.insertId
                        await sendMail_noAttach(result2[0].email ,subject , mail_body)
                        res.send("success")
                    }
                }
            })
        }
        });
    }
    catch{
    console.log("catch")
    res.send("internal sql error")
    return
}
}