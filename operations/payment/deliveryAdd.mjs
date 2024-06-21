import {connection_function} from '../../service/connection.mjs'
import {sendMail_noAttach} from '../send_mails/index.mjs'

export async function operation(req , res){
    const connection = connection_function()
    try{
        var sql = "INSERT INTO delivery (firstname , lastname , district ,address , contact , province , landmarks) " + "VALUES ('"+req.body.firstname+"','"+req.body.lastname+"','"+req.body.district+"','"+req.body.address+"','"+req.body.contact+"','"+req.body.province+"','"+req.body.landmarks+"')"
        connection.query(sql,async function (err, result, fields) {
        if (err) res.send(err);
        else{
            let subject = "Your Product Has New Order"
            let mail_body = 'Your New Order id is : '+result.insertId
            await sendMail_noAttach(req.body.email ,subject , mail_body)
            res.send({
                id:result.insertId
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